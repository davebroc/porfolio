import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import loadObject from './util/loadObject';

async function addObject(scene: THREE.Scene, name: string) {
    const path = "./src/assets/";
    const object = await loadObject(path + name + ".obj", path + name + ".mtl");
    object.name = name;

    if (object !== undefined)
        scene.add(object);
    return object;
}

const ThreeScene: React.FC = () => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

    useEffect(() => {
        // Create the scene
        const scene = new THREE.Scene();

        // Create the camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        cameraRef.current = camera;

        // Create the renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Add the renderer's canvas element to the DOM
        if (sceneRef.current)
            sceneRef.current.appendChild(renderer.domElement);

        const light = new THREE.AmbientLight(0xFFFFFF);
        scene.add(light);

        const computer = addObject(scene, "computer");

        // Keyboard event listeners
        const handleKeyDown = (event: KeyboardEvent) => {
            const moveDistance = 0.4;

            switch (event.code) {
                case "KeyW": // Move forward
                    camera.position.z -= moveDistance;
                    break;
                case "KeyS": // Move backward
                    camera.position.z += moveDistance;
                    break;
                case "KeyA": // Move left
                    camera.position.x -= moveDistance;
                    break;
                case "KeyD": // Move right
                    camera.position.x += moveDistance;
                    break;
                default:
                    break;
            }
        };
        document.addEventListener("keydown", handleKeyDown);

        // Mouse event listeners
        let isMouseDown = false;
        let previousMouseX = 0;
        let previousMouseY = 0;

        const handleMouseDown = (event: MouseEvent) => {
            isMouseDown = true;
            previousMouseX = event.clientX;
            previousMouseY = event.clientY;
        };

        const handleMouseUp = () => {
            isMouseDown = false;
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (!isMouseDown) return;

            const sensitivity = 0.1;

            const mouseMoveX = (event.clientX - previousMouseX) * sensitivity;
            const mouseMoveY = (event.clientY - previousMouseY) * sensitivity;

            camera.rotation.y += (mouseMoveX * Math.PI) / 180;
            camera.rotation.x += (mouseMoveY * Math.PI) / 180;

            previousMouseX = event.clientX;
            previousMouseY = event.clientY;
        };

        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mousemove", handleMouseMove);

        // Render loop
        const animate = () => {
            requestAnimationFrame(animate);

            computer.then((obj) => (obj.rotation.x += 0.01));

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            // Clean up event listeners when the component unmounts
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div ref={sceneRef}></div>;
};

export default ThreeScene;
