const Ship = require('../modules/ship');

const testShip = new Ship(5); // first ship for both tests

test('ship gets hit and increments hit counter', () => {
  testShip.hit();
  expect(testShip.hits).toBe(1);
  testShip.hit();
  expect(testShip.hits).toBe(2);
});

test('ship returns NOT SUNK', () => {
  expect(testShip.isSunk()).toBe(false);
});

test('ship gets hit 5 times and returns true to sunk', () => {
  const testShip = new Ship(5); // second ship to test BOTH methods
  testShip.hit();
  testShip.hit();
  testShip.hit();
  testShip.hit();
  testShip.hit();

  expect(testShip.hits).toBe(5);
  expect(testShip.isSunk()).toBe(true);
});
