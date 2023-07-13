import loadObject from "./loadObject";
import * as THREE from 'three';
import { assetPath } from "./paths";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Planet } from "../data/planetProperties";
import { Font } from "three/examples/jsm/loaders/FontLoader.js";

export default async function addPlanet(scene: THREE.Scene, planet: Planet, font: Font) {
    const planetObj = await loadObject(assetPath + planet.name + ".obj", assetPath + planet.name + ".mtl");
    planetObj.name = planet.name;

    if (planet.scale) {
        const scaleMatrix = new THREE.Matrix4()
        scaleMatrix.scale(planet.scale);
        planetObj.applyMatrix4(scaleMatrix)
    }

    const group = new THREE.Group();
    if (planetObj !== undefined)
        group.add(planetObj);

    const textGeometry = new TextGeometry(planet.title, {
        font: font,
        size: 0.15,
        height: 0.05,
        curveSegments: 12,
        bevelEnabled: false,
    });

    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    group.add(textMesh);

    if (planet.position) {
        const positionMatrix = new THREE.Matrix4()
        positionMatrix.setPosition(planet.position)
        group.applyMatrix4(positionMatrix)
    }

    const boundingBox = new THREE.Box3().setFromObject(group);

    const dimensions = new THREE.Vector3();
    boundingBox.getSize(dimensions);
    const height = dimensions.y;

    textMesh.position.copy(planet.position);

    const textBoundingBox = new THREE.Box3().setFromObject(textMesh);
    const textDimensions = new THREE.Vector3();
    textBoundingBox.getSize(textDimensions);
    const textLength = textDimensions.x

    textMesh.position.x -= textLength / 2
    textMesh.position.y += (height / 2) + 0.2; // Position above the planet

    textMesh.rotateY(-Math.PI / 4);

    scene.add(textMesh);
    scene.add(group);

    return group;
}
