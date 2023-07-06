import * as THREE from 'three';

export default function createRoundedRectMesh(width: number, height: number, radius: number) {
    const roundedRectShape = new THREE.Shape();

    roundedRect(roundedRectShape, 0, 0, width, height, radius);

    const geometry = new THREE.ShapeGeometry(roundedRectShape);
    const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    const roundedRectMesh = new THREE.Mesh(geometry, material);

    return roundedRectMesh;
}

function roundedRect(ctx: THREE.Shape, x: number, y: number, width: number, height: number, radius: number) {
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
}