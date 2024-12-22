import Ship from './ship.js';

class GameBoard {
  constructor() {
    this.grid = Array(10)
      .fill()
      .map(() => Array(10).fill(0)); // Adjusted to 10x10 grid
  }

  // check if the placement is within bounds
  isOutOfBounds(x, y, length, direction) {
    if (direction === 'horizontal') {
      return x + length > this.grid[0].length; // If ship exceeds width
    } else if (direction === 'vertical') {
      return y + length > this.grid.length; // If ship exceeds height
    }
    return false;
  }

  // check for overlap
  isOverlapping(x, y, length, direction) {
    for (let i = 0; i < length; i++) {
      if (direction === 'horizontal' && this.grid[y][x + i] === 1) {
        return true; // Overlap detected
      } else if (direction === 'vertical' && this.grid[y + i][x] === 1) {
        return true; // Overlap detected
      }
    }
    return false; // No overlap
  }

  // place ship on grid (checks if placement is valid)
  placeShip(x, y, length, direction) {
    if (this.isOutOfBounds(x, y, length, direction)) {
      console.log('Ship placement is out of bounds!');
      return;
    }
    if (this.isOverlapping(x, y, length, direction)) {
      console.log('Ship placement overlaps with another ship!');
      return;
    }

    // create ship and place it on the grid
    const ship = new Ship(length);
    ship.shipPosition(x, y, length, direction, this.grid); // Pass grid here
    console.log('Ship placed successfully!');
  }
}

export default GameBoard;
