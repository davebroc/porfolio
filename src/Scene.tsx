import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import createStars from './util/createStars';

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader.js";
import { planetProperties } from './data/planetProperties';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import CameraControls from 'camera-controls';
import loadFont from './util/loadFont';
import addPlanet from './util/addPlanet';

const ThreeScene: React.FC = () => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

    const [currentPlanet, setCurrentPlanet] = React.useState<string | null>(null);

    const cameraPosOffsetMatrix = new THREE.Matrix4().makeTranslation(-2, 2, 3);
    const zeroVector = new THREE.Vector3(0, 0, 0); // Replace with actual initial position
    const focusedCameraPos = zeroVector.clone().applyMatrix4(cameraPosOffsetMatrix);
    const cameraFocusedDistance = zeroVector.distanceTo(focusedCameraPos);

    useEffect(() => {
        // Create the scene
        const scene = new THREE.Scene();
        const clock = new THREE.Clock();

        // Create the camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        cameraRef.current = camera;

        // Create the renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(new THREE.Color("#1c1624"));

        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        // Add the renderer's canvas element to the DOM
        if (sceneRef.current)
            sceneRef.current.appendChild(renderer.domElement);

        CameraControls.install({ THREE });
        const cameraControls = new CameraControls(camera, renderer.domElement);
        cameraControls.setLookAt(-8, 5, 4, 0, 0, -5, true)
        const delta = clock.getDelta();
        cameraControls.update(delta);

        // light source
        const color = 0xffffff, intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);

        const stars = createStars()
        stars.forEach((star) => scene.add(star))

        const planets: THREE.Object3D<THREE.Event>[] = []


        const fontPromise = loadFont('/fonts/helvetiker_regular.typeface.json')
        fontPromise.then((font) => {
            planetProperties.forEach(planet => {
                addPlanet(scene, planet, font).then(planet => planets.push(planet))
            })

            const fontProperties = {
                font: font,
                size: 0.2,
                height: 0.05,
                curveSegments: 12,
                bevelEnabled: false,
            }
            const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

            const textGeometryName = new TextGeometry('David Brockbank', fontProperties);
            const textGeometryTitle = new TextGeometry('Software Engineer', fontProperties);

            const textMesh = new THREE.Mesh(textGeometryName, textMaterial);
            textMesh.applyMatrix4(new THREE.Matrix4().scale(new THREE.Vector3(10, 10, 10)));
            textMesh.position.set(0, 0, -35);

            const textMeshTitle = new THREE.Mesh(textGeometryTitle, textMaterial);
            textMeshTitle.applyMatrix4(new THREE.Matrix4().scale(new THREE.Vector3(5, 5, 5)));
            textMeshTitle.position.set(0, -2, -35);

            scene.add(textMesh);
            scene.add(textMeshTitle);
        });

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (event: MouseEvent) => {
            outlinePass.selectedObjects = []
            mouseX = event.clientX;
            mouseY = event.clientY;

            // Convert mouse coordinates to normalized device coordinates
            const mouseVector = new THREE.Vector2();
            mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Raycast from the camera to the mouse position
            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouseVector, camera);

            const intersects = raycaster.intersectObjects(planets);
            if (intersects.length > 0) {
                outlinePass.selectedObjects.push(intersects[0].object)
                const objPos = intersects[0].object.localToWorld(new THREE.Vector3(0, 0, 0))

                const newCameraPos = new THREE.Vector3(objPos.x, objPos.y, objPos.z)
                newCameraPos.applyMatrix4(cameraPosOffsetMatrix)

                cameraControls.setLookAt(newCameraPos.x, newCameraPos.y, newCameraPos.z, objPos.x, objPos.y, objPos.z, true)

                const delta = clock.getDelta();
                cameraControls.update(delta);
            }
        };
        document.addEventListener("mousemove", handleMouseMove);

        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        const outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
        outlinePass.edgeStrength = 5;
        outlinePass.visibleEdgeColor.set('#FFFFFF');
        composer.addPass(outlinePass);

        // Add gamma correction pass
        const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader);
        composer.addPass(gammaCorrectionPass);

        // Render loop
        const animate = () => {
            requestAnimationFrame(animate);

            planets.forEach((planetGroup) => {
                const planet = planetGroup.children[0]

                planet.rotation.y += 0.01;
            });

            stars.forEach(star => {
                star.position.x = mouseX * 0.0001
                star.position.y = mouseY * -0.0001;
            })

            const delta = clock.getDelta();
            cameraControls.update(delta);

            const cameraPosition = new THREE.Vector3();
            cameraControls.getPosition(cameraPosition)

            let isFocused = false;
            planetProperties.forEach(planet => {
                // fixed to 3 dp to prevent floating point errors
                if (planet.position.distanceTo(cameraPosition).toPrecision(3) != cameraFocusedDistance.toPrecision(3))
                    return
                isFocused = true;
                setCurrentPlanet(planet.name)
            })
            if (!isFocused)
                setCurrentPlanet(null)

            composer.render();
        }

        animate();

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="absolute" ref={sceneRef}>
            <div className='relative'>
                {planetProperties.map(planet => planet.name === currentPlanet && (
                    <> {planet.content}</>
                ))
                }
            </div>
        </div >
    );
};

export default ThreeScene;
