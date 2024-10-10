import { utils } from "./../utils.js"
export class Game {
    constructor(data) {
        this.context = "loading" // contextes possibles: 
        this.node = document.querySelector("#game-frame");
        this.resolution = { x: data.resolution.x, y: data.resolution.y };

    }

    setWindowFrame() {
        this.node.style.width = this.resolution.x + "px";
        this.node.style.height = this.resolution.y + "px";
        console.log(this.node);
    }

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

    tick(now) {
        utils.utilitaires.fpsTick(now);
        this.setWindowFrameLiveRefresh();
    }

    load = () => {
        utils.utilitaires.compteurFps(); //Pour le fps
        utils.animer.ui.mainIntroFadeAsync();
    }


}