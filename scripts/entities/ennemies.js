// Enemy class (extends Entity)
let nb_enn = 0;

export class Ennemy {
    constructor(data) {
        this.id = data.id;
        this.class = data.class;
        this.name = data.health;
        this.mana = data.mana;
        this.stats = data.stats;
        this.inventory = data.inventory;
    }

    initEnnemi(nom,classe) {
        this.nom = nom;
        this.classe = classe;
    }

    initIDEnnemi() {
        nb_enn += 1;
        this.id = nb_enn;
    }

    
}