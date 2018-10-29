// board.js
const Square = require('./square');
const Game = require('./game');

class Board {
    constructor() {
        this.counter = 0;
        this.grid = [[new Square(''), new Square(''), new Square('')],
        [new Square(''), new Square(''), new Square('')],
        [new Square(''), new Square(''), new Square('')]
        ];
    }

//  input player value into grid
    makeMove(row, col, playerTurn) {
        console.log(row, col, playerTurn + ": Made move");
        if (this.grid[row][col].isEmpty()) {
            this.grid[row][col].placeInput(playerTurn);
            this.counter++;
            return true;
        }
        else {
            return false;
        }
    }
    
    // checks winning conditions
    checkWinner() {
        // vertical test
        for (var j = 0; j < 3; j++) {
            if (this.grid[0][j].box === this.grid[1][j].box &&
                this.grid[0][j].box === this.grid[2][j].box &&
                this.grid[0][j].box != '') {
        
                return true; 
            }
        }
    }
    
}
module.exports = Board;