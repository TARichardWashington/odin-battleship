export default class Ship {
    #size;

    constructor(size) {
        this.#size = size;
    }

    get size() {
        return this.#size;
    }
}