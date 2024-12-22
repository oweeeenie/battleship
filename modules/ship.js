class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunkStatus = false;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    if (this.hits >= this.length) {
      this.sunkStatus = true;
      return true;
    } else {
      this.sunkStatus = false;
      return false;
    }
  }

  shipPosition(x, y, length, direction, grid) {
    // accept grid as a parameter
    if (direction === 'horizontal') {
      for (let i = 0; i < length; i++) {
        grid[y][x + i] = 1; // use the passed grid
      }
    } else if (direction === 'vertical') {
      for (let i = 0; i < length; i++) {
        grid[y + i][x] = 1; // use the passed grid
      }
    }
  }
}

export default Ship;
