import { utils } from "./../utils.js"
//La classe jeu comporte les elements principals du jeu, 
//comme les fonctions de rafraichissement ou celles qui affichent
//un menu ou autres. elle utilise beaucoup utils comme passerelle aux 
//autres modules
export class Game {
    constructor(data) {
        this.context = "loading" // contextes possibles: 
        this.node = document.querySelector("#game-frame");
        this.resolution = { x: data.resolution.x, y: data.resolution.y };

    }
    //Set la taille selon le fichier json
    setWindowFrame() {
        this.node.style.width = this.resolution.x + "px";
        this.node.style.height = this.resolution.y + "px";
    }
    //Set la taille en temps réel selon la taille de fenêtre
    setWindowFrameLiveRefresh() {
        this.node.style.width = window.innerWidth + "px";
        this.node.style.height = window.innerHeight + "px";
    }

    setContext(newContext) {
        this.context = newContext;
    }

    getContext() {
        return this.context;
    }

    //tick du jeu
    tick(now) {
        utils.utilitaires.fpsTick(now);
        this.setWindowFrameLiveRefresh();
    }

    //fonction de chargement du jeu
    //certaines animations sont en css et ne respectent pas le tick
    load = () => {
        utils.utilitaires.compteurFps(); //Pour le fps
        utils.animer.ui.mainIntroFadeAsync();
    }


}