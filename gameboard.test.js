import Gameboard from './gameboard.js';

const gameboard = new Gameboard;

test('Gamebaord can be instantiated', () => {
    expect(gameboard).toBeDefined();
});