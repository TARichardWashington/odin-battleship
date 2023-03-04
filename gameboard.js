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
        let ship = new Ship(size);

        this.#ships.push([ship, direction, x, y]);

        for (let i = 0; i < size; i++) {
            this.#coordinates[x + i][y] = 1;
        }
    }

    get ships() {
        return this.#ships;
    }

    shipAt(x, y) {
        return this.#coordinates[x][y];
    }
}