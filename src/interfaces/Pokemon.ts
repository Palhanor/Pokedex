class Pokemon {
    name: string;
    image: string;
    index: number;
    xp: number;
    height: number;
    weight: number;
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
    types: string[];
    abilities: string[];
    moves: string[];
    // description: string = "";
    // generation!: string;
    // habitat!: string | null;
    // capture!: number;
    // gender!: number;
    // legendary!: boolean;

    constructor(
        name: string,
        image: string,
        index: number,
        xp: number,
        height: number,
        weight: number,
        hp: number,
        attack: number,
        defense: number,
        spAttack: number,
        spDefense: number,
        speed: number,
        types: string[],
        abilities: string[],
        moves: string[]) {
        this.name = name;
        this.image = image;
        this.index = index;
        this.xp = xp;
        this.height = height;
        this.weight = weight;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.spAttack = spAttack;
        this.spDefense = spDefense;
        this.speed = speed;
        this.types = types;
        this.abilities = abilities;
        this.moves = moves;
    }

    getHeight() {
        return `${(this.height / 10).toFixed(2)} M`
    }

    getWeight() {
        return `${this.weight} Kg`
    }

    // setDescription(description: string) {
    //     this.description = description
    // }
}

export default Pokemon;