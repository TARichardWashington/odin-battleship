import Gameboard from './gameboard.js';
import Ship from './ship.js';

const gameboard = new Gameboard;

test('Gamebaord can be instantiated', () => {
    expect(gameboard).toBeDefined();
});

test('Ships can be added to the gameboard in the horizontal direction', () => {
    gameboard.placeShip(0, 0, true, 3);
    let ships = gameboard.ships;

    expect(Array.isArray(ships)).toBe(true);
    expect(ships[0][0] instanceof Ship).toBe(true);
    expect(ships[0][1]).toBe(true);
    expect(ships[0][2]).toBe(0);
    expect(ships[0][3]).toBe(0);
    expect(gameboard.isAShipAt(0, 0)).toBe(1);
});

test('Ships can be added to the gameboard at a different location', () => {
    gameboard.placeShip(5, 5, true, 3);
    let ships = gameboard.ships;

    expect(Array.isArray(ships)).toBe(true);
    expect(ships[1][0] instanceof Ship).toBe(true);
    expect(ships[1][1]).toBe(true);
    expect(ships[1][2]).toBe(5);
    expect(ships[1][3]).toBe(5);
    expect(gameboard.isAShipAt(5, 5)).toBe(1);
});


test('Ensure all points along ships are on the game board', () => {
    gameboard.placeShip(5, 6, true, 3);
    let ships = gameboard.ships;

    expect(Array.isArray(ships)).toBe(true);
    expect(gameboard.isAShipAt(5, 6)).toBe(1);
    expect(gameboard.isAShipAt(6, 6)).toBe(1);
    expect(gameboard.isAShipAt(7, 6)).toBe(1);
    expect(gameboard.isAShipAt(8, 6)).toBe(null);
});

test('Check ships cannot be placed where ships already are', () => {
    expect(() =>
        gameboard.placeShip(5, 6, true, 3)
    ).toThrow();
});

test('Ships can be added in the vertical direction', () => {
    gameboard.placeShip(9, 0, false, 4);
    let ships = gameboard.ships;

    expect(Array.isArray(ships)).toBe(true);
    expect(gameboard.isAShipAt(9, 0)).toBe(1);
    expect(gameboard.isAShipAt(9, 1)).toBe(1);
    expect(gameboard.isAShipAt(9, 2)).toBe(1);
    expect(gameboard.isAShipAt(9, 3)).toBe(1);
    expect(gameboard.isAShipAt(9, 4)).toBe(null);
});

test('Getting a ship from an empty location returns false', () => {
    expect(gameboard.getShipAt(8, 8)).toBe(false);
});

test('Getting a ship from an empty location returns the right ship', () => {
    const testShip = new Ship(4);
    expect(gameboard.getShipAt(9, 0).size).toBe(testShip.size);
});