import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

export default function loadFont(fontFileName: string) {
    return new Promise<Font>((resolve, reject) => {
        const fontLoader = new FontLoader();
        fontLoader.load(fontFileName, (font) => {
            resolve(font);
        }, undefined, reject);
    });
}