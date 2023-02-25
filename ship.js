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
}