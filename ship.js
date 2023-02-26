export default class Ship {
    #size;
    #_sunk;
    #hits;

    constructor(size) {
        this.#size = size;
        this.#_sunk = false;
        this.#hits = 0;
    }

    get size() {
        return this.#size;
    }

    get isSunk() {
        return this.#_sunk;
    }

    set #sunk(sunk) {
        this.#_sunk = sunk;
    }

    hit() {
        this.#hits++;

        if (this.#hits === this.#size) {
            this.#sunk = true;
        }
    }

    get hits() {
        return this.#hits;
    }

    get type() {
        let type = '';
        switch (this.#size) {
            case 5:
                type = 'Carrier';
                break;
            case 4:
                type = 'Battleship'
                break;
            case 3:
                type = 'Battleship';
                break;
            case 2:
                type = 'Destroyer';
                break;
            default:
                throw new Error('Unkown type');
        }

        return type;
    }
}