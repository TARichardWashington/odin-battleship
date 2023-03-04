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
        let ship = new Ship(size);

        this.#ships.push([ship, direction, x, y]);

        if (direction) {
            for (let i = 0; i < size; i++) {
                if (this.shipAt(x + i, y)) {
                    throw new Error('Ship already exists here');
                }
            }

            for (let i = 0; i < size; i++) {
                this.#coordinates[x + i][y] = 1;
            }
        } else {
            for (let i = 0; i < size; i++) {
                if (this.shipAt(x, y + i)) {
                    throw new Error('Ship already exists here');
                }
            }

            for (let i = 0; i < size; i++) {
                this.#coordinates[x][y + i] = 1;
            }
        }
    }



    get ships() {
        return this.#ships;
    }

    shipAt(x, y) {
        return this.#coordinates[x][y];
    }
}