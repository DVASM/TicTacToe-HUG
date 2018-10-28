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
    
}
module.exports = Board;