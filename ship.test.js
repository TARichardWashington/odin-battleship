import Ship from './ship.js';

const ship = new Ship(5);

test('Ships can be created with a size', () => {
    expect(ship.size).toBe(5);
});

test('The size of a ship cannot be changed after it has been created', () => {
    expect(() =>
        ship.size = 6
    ).toThrow();
});