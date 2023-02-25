export default class Ship {
    constructor(size) {
        this._size = size;
    }

    get size() {
        return this._size;
    }
}