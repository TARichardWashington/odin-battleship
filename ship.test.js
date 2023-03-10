import Ship from './ship.js';

const ship = new Ship(5);

test('Ships can be instantiated ', () => {
    expect(ship).toBeDefined();
});

test('Ships can be created with a size', () => {
    expect(ship.size).toBe(5);
});

test('The size of a ship cannot be changed after it has been created', () => {
    expect(() =>
        ship.size = 6
    ).toThrow();
});

test('Ships are initialised with 0 hits', () => {
    expect(ship.hits).toBe(0);
});

test('Ships are initialised as not sunk', () => {
    expect(ship.isSunk).toBe(false);
});

test('Ships that are hit have hits', () => {
    ship.hit();
    expect(ship.hits).toBe(1);
});

test('Ships that have not been hit enough are not sunk', () => {
    expect(ship.isSunk).toBe(false);
});

test('Ships that get hit enough become sunk', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk).toBe(true);
});

test('Ships return the correct type', () => {
    expect(ship.type).toBe('Carrier');
});

test('The size of ships must be an integer', () => {
    expect(() =>
        new Ship('5')
    ).toThrow();
});

test('The size of ships must 2, 3, 4, or 5', () => {
    expect(() =>
        new Ship(6)
    ).toThrow();
});