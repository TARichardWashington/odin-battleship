import Ship from './ship.js';

const ship = new Ship(5);

test('adder does add', () => {
    expect(ship.size).toBe(5);
});