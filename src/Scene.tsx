import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import loadObject from './util/loadObject';
import { assetPath } from './util/paths';
import createStars from './util/createStars';

async function addObject(scene: THREE.Scene, name: string) {
    const object = await loadObject(assetPath + name + ".obj", assetPath + name + ".mtl");
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
        renderer.setClearColor(new THREE.Color("#1c1624"));

        // Add the renderer's canvas element to the DOM
        if (sceneRef.current)
            sceneRef.current.appendChild(renderer.domElement);
        // light source
        const color = 0xffffff, intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);

        const resizeRendererToDisplaySize = (renderer: THREE.WebGLRenderer) => {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            // resize only when necessary
            if (needResize) {
                //3rd parameter `false` to change the internal canvas size
                renderer.setSize(width, height, false);
            }
            return needResize;
        };

        const stars = createStars()
        stars.forEach((star) => scene.add(star))

        const computer = addObject(scene, "computer");

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        };
        document.addEventListener("mousemove", handleMouseMove);

        // Render loop
        const animate = () => {
            requestAnimationFrame(animate);

            computer.then((obj) => {
                obj.rotation.x += 0.01;
                obj.rotation.y += 0.01;
            });

            stars.forEach(star => {
                star.position.x = mouseX * 0.0001
                star.position.y = mouseY * -0.0001;
            })


            renderer.render(scene, camera);
        }

        animate();

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div ref={sceneRef}></div>;
};

export default ThreeScene;
