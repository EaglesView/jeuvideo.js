// Utility functions, such as collision detection
import { ANIMATIONS } from "/scripts/systems/animations.js";
import { ASSETMGR } from "/scripts/core/assets.js";

// Start the game loop with FPS display
let lastFrameTime = performance.now();
let frameCount = 0;
let fps = 0;



export const utils = {
    collisions: {

    },
    contexte: {
        //gere tout les contextes d'ecran 
        //ex: si le joueur est dans une fenetre, il ne peut deplacer son personnage
        //ex: si le joueur ouvre son menu, les fleches vont bouger le menu et non le personnage.
        touverContexte: (input) => {
            let contexte;

            return contexte;
        },
        contextes: {
            enjeu: {
                jeu_interieur: "jeu_in",
                jeu_exterieur: "jeu_out"
            },
            enfenetre: {
                menu: "menu",
                normal: "normal_window"
            }
        }
    },
    animer: {
        fadeBG: (node, time, easingStyle, newColor) => {
            ANIMATIONS["tweening"].fade(node, "backgroundColor", time, easingStyle, newColor);
        },
        fadeOpa: (node, time, easingStyle, newOpa) => {
            ANIMATIONS["tweening"].fade(node, "opacity", time, easingStyle, newOpa);
        },
        "ui": {
            fadeInOutAsync: async (id, uptime) => { //permet de fade une image dans l'ecran. la fonction s'occupe de detruire lobjet egalement
                const delay = ms => new Promise(res => setTimeout(res, ms));
                utils.controlleur.ajoutAsset(id, "#game-frame");
                setTimeout(utils.animer.fadeBG(document.querySelector("#game-frame"), 0.5, "ease-out", "black"), 1.5); //fade screen to black
                await delay(400);
                setTimeout(utils.animer.fadeOpa(document.querySelector(`#${id}`), 1.0, "ease-in", 1), 1.5);
                await delay(uptime);
                setTimeout(utils.animer.fadeOpa(document.querySelector(`#${id}`), 1.0, "ease-in", 0), 1.5);
                await delay(1200);
                document.getElementById(id).remove();
            },
            mainIntroFadeAsync: async () => {
                await utils.animer.ui.fadeInOutAsync("engine-logo", 2000);
                await utils.animer.ui.fadeInOutAsync("cvm-logo", 2000);

                // Add the menu-container (no "engine" needed)
                utils.controlleur.ajoutAsset("menu-container", "#game-frame");
            }

        }

    },
    controlleur: {
        ajoutAsset: (name, parent) => {
            ASSETMGR.methods.addAsset(name, parent);
        },
        effaceAsset: (id) => {
            const asset = document.querySelector(`#${id}`);
            asset.remove();
        }
    },
    utilitaires: {
        compteurFps: () => {
            const fpsContainer = document.createElement('div');
            fpsContainer.id = 'fps-container';
            fpsContainer.style.position = 'absolute';
            fpsContainer.style.top = '10px';
            fpsContainer.style.right = '10px';
            fpsContainer.style.color = 'white';
            fpsContainer.style.backgroundColor = 'black';
            fpsContainer.style.fontFamily = 'monospace';
            fpsContainer.style.zIndex = 1000; // Ensure it stays on top
            document.querySelector('#game-frame').appendChild(fpsContainer);
            return fpsContainer;
        },
        fpsTick: (now) => {

            // Calculate FPS
            const delta = now - lastFrameTime;
            frameCount++;
            if (delta >= 1000) {  // Update every second
                fps = (frameCount / delta) * 1000;
                frameCount = 0;
                lastFrameTime = now;
            }
            const fpsContainer = document.querySelector("#fps-container")
            // Update the FPS container text
            fpsContainer.innerText = `FPS: ${Math.round(fps)}`;
        }
    }
}
