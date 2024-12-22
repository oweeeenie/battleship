import GameBoard from './gameBoard';
import Ship from './ship';

class Player {
  constructor(name) {
    this.name = name;
    this.GameBoard = new GameBoard();
    this.ships = [];
  }

  addShip(ship) {
    if (this.GameBoard.placeShip(ship)) {
      if (this.ships.some((existingShip) => existingShip.name === ship.name)) {
        console.log(`${ship.name} is already added.`);
      } else {
        this.ships.push(ship);
        console.log(`${ship.name} added successfully!`);
      }
    } else {
      console.log(`Failed to add ${ship.name}.`);
    }
  }
}

export default Player;
