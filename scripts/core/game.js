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

    setContext(newContext) {
        this.context = newContext;
    }

    getContext() {
        return this.context;
    }

    tick() {

    }

    initialLoad() {
        utils.animer.fade(this.node, 0.5, "ease-out", "black"); //fade screen to black



    }
}