import Ship from './ship.js';

export default class Gameboard {
    #coordinates;
    #ships;

    constructor() {
        this.#coordinates =
            [
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],

            ];

        this.#ships = [];
    }

    placeShip(x, y, direction, size) {
        // Direction true = horizontal
        // Direction false = virtical

        if (direction) {
            for (let i = 0; i < size; i++) {
                if (this.isAShipAt(x + i, y)) {
                    throw new Error('Ship already exists here');
                }
            }

            for (let i = 0; i < size; i++) {
                this.#coordinates[x + i][y] = 1;
            }
        } else {
            for (let i = 0; i < size; i++) {
                if (this.isAShipAt(x, y + i)) {
                    throw new Error('Ship already exists here');
                }
            }

            for (let i = 0; i < size; i++) {
                this.#coordinates[x][y + i] = 1;
            }
        }

        let ship = new Ship(size);
        this.#ships.push([ship, direction, x, y]);
    }



    get ships() {
        return this.#ships;
    }

    isAShipAt(x, y) {
        return this.#coordinates[x][y];
    }

    getShipAt(x, y) {
        if (this.#coordinates[x][y] === null) {
            return false;
        }
    }
}