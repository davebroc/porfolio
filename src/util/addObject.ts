import loadObject from "./loadObject";
import * as THREE from 'three';
import { assetPath } from "./paths";

export default async function addObject(scene: THREE.Scene, name: string, scale?: THREE.Vector3, position?: THREE.Vector3) {
    const object = await loadObject(assetPath + name + ".obj", assetPath + name + ".mtl");
    object.name = name;

    if (scale) {
        const scaleMatrix = new THREE.Matrix4()
        scaleMatrix.scale(scale);
        object.applyMatrix4(scaleMatrix)
    }

    if (position) {
        const positionMatrix = new THREE.Matrix4()
        positionMatrix.setPosition(position)
        object.applyMatrix4(positionMatrix)
    }


    if (object !== undefined)
        scene.add(object);
    return object;
}
