// Utility functions, such as collision detection
import { ANIMATIONS } from "/scripts/systems/animations.js";
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
        fade: (node, time, easingStyle, newColor) => {
            ANIMATIONS["tweening"].fade(node, time, easingStyle, newColor);
        }
    }
}
