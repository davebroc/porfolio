import * as THREE from 'three';

export default function getRandomPosition() {
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const z = (Math.random() - 0.5) * 10;

    return new THREE.Vector3(x, y, z);
};