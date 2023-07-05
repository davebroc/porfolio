import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

export default function loadObject(objPath: string, mtlPath: string): Promise<THREE.Object3D> {
    return new Promise((resolve, reject) => {
        const objLoader = new OBJLoader();
        const mtlLoader = new MTLLoader();

        mtlLoader.load(
            mtlPath,
            (materials) => {
                materials.preload();
                objLoader.setMaterials(materials);

                objLoader.load(
                    objPath,
                    (object) => {
                        resolve(object);
                    },
                    undefined,
                    (error) => {
                        reject(error);
                    }
                );
            },
            undefined,
            (error) => {
                reject(error);
            }
        );
    });
}



