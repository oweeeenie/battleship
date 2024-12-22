function renderBoard(boardId, gameBoard) {
  const boardElement = document.getElementById(boardId);

  // Clear previous board if any
  boardElement.innerHTML = '';

  // Loop through the grid and create divs for each cell
  gameBoard.grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      const cellElement = document.createElement('div');

      // You can add conditions here to change the cell color based on ship placement or attacks
      if (cell === 1) {
        // Ship is placed here (maybe blue or dark color)
        cellElement.style.backgroundColor = 'navy';
      } else if (cell === 'hit') {
        // Cell was hit
        cellElement.style.backgroundColor = 'red';
      } else if (cell === 'miss') {
        // Cell was missed
        cellElement.style.backgroundColor = 'lightgray';
      }

      cellElement.dataset.x = x;
      cellElement.dataset.y = y;

      // Attach click event to each cell for attack logic
      cellElement.addEventListener('click', () => {
        // Trigger attack logic based on the coordinate clicked
        console.log(`Attack at (${x}, ${y})`);
        // You'll want to handle the attack here, possibly calling a method from Player/Computer
      });

      boardElement.appendChild(cellElement);
    });
  });
}

// Export the render function for use in other files
export { renderBoard };
