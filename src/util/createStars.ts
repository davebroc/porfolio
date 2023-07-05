import * as THREE from 'three';
import { assetPath } from './paths';

const getRandomParticlePos = (particleCount: number) => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
};

export default function createStars() {
    // Geometry
    const geometrys = [new THREE.BufferGeometry(), new THREE.BufferGeometry()];

    geometrys[0].setAttribute(
        "position",
        new THREE.BufferAttribute(getRandomParticlePos(350), 3)
    );
    geometrys[1].setAttribute(
        "position",
        new THREE.BufferAttribute(getRandomParticlePos(1500), 3)
    );

    const loader = new THREE.TextureLoader();

    // material
    const materials = [
        new THREE.PointsMaterial({
            size: 0.05,
            map: loader.load(assetPath + "slimStar.png"),
            transparent: true
        }),
        new THREE.PointsMaterial({
            size: 0.075,
            map: loader.load(assetPath + "thickStar.png"),
            transparent: true,
        })
    ];

    const starsT1 = new THREE.Points(geometrys[0], materials[0]);
    const starsT2 = new THREE.Points(geometrys[1], materials[1]);

    return [starsT1, starsT2];
}