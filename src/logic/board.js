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
}
module.exports = Board;