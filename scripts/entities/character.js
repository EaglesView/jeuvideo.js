// Character class (extends Entity)
let nb_character = 0;

export class Character {
    constructor(data) {
        this.id = data.id;
        this.class = data.class;
        this.name = data.health;
        this.mana = data.mana;
        this.stats = data.stats;
        this.inventory = data.inventory;
    }

    initJoueur(nom,classe) {
        this.nom = nom;
        this.classe = classe;
    }

    initIDJoueur() {
        nb_character += 1;
        this.id = nb_character;
    }


}