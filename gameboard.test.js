import Gameboard from './gameboard.js';
import Ship from './ship.js';

const gameboard = new Gameboard;

test('Gamebaord can be instantiated', () => {
    expect(gameboard).toBeDefined();
});

test('Ships can be added to the gameboard', () => {
    gameboard.placeShip(0, 0, true, 3);
    let ships = gameboard.ships;

    expect(Array.isArray(ships)).toBe(true);
    expect(ships[0][0] instanceof Ship).toBe(true);
    expect(ships[0][1]).toBe(true);
    expect(ships[0][2]).toBe(0);
    expect(ships[0][3]).toBe(0);
    expect(gameboard.shipAt(0, 0)).toBe(1);
});

test('Ships can be added to the gameboard at a different location', () => {
    gameboard.placeShip(5, 5, true, 3);
    let ships = gameboard.ships;

    expect(Array.isArray(ships)).toBe(true);
    expect(ships[1][0] instanceof Ship).toBe(true);
    expect(ships[1][1]).toBe(true);
    expect(ships[1][2]).toBe(5);
    expect(ships[1][3]).toBe(5);
    expect(gameboard.shipAt(5, 5)).toBe(1);
});