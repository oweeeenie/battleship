import GameBoard from './gameBoard.js';

// Create a new GameBoard
const board = new GameBoard();

// Test isOutOfBounds method
console.log('Testing isOutOfBounds...');
console.log(board.isOutOfBounds(0, 0, 5, 'horizontal')); // False (within bounds)
console.log(board.isOutOfBounds(7, 0, 5, 'horizontal')); // True (out of bounds)
console.log(board.isOutOfBounds(0, 0, 5, 'vertical')); // False (within bounds)
console.log(board.isOutOfBounds(0, 6, 5, 'vertical')); // True (out of bounds)

// Test isOverlapping method
board.placeShip(0, 0, 4, 'horizontal'); // Place a ship horizontally at (0, 0)
console.log('Testing isOverlapping...');
console.log(board.isOverlapping(0, 0, 4, 'horizontal')); // True (ship already placed)
console.log(board.isOverlapping(0, 5, 4, 'horizontal')); // False (no overlap)
console.log(board.isOverlapping(0, 0, 2, 'vertical')); // False (no overlap)

// Test placeShip method
console.log('Testing placeShip...');
board.placeShip(1, 1, 3, 'horizontal'); // Should succeed
board.placeShip(7, 1, 4, 'horizontal'); // Should fail (out of bounds)
board.placeShip(0, 0, 4, 'vertical'); // Should succeed
board.placeShip(1, 0, 4, 'vertical'); // Should fail (overlap)
