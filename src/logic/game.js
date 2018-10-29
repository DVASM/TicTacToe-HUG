const Board = require("./board");
// Game class
class Game {
    constructor() {
        console.log('Creating game.....');
        this.board = new Board('');
        this.gameStatus = true;
        this.playerTurn = 'X';
        console.log('Game status: ' + this.gameStatus);
    }

    // Game over
    gameEnded() {
        if (this.board.checkWinner() === true) {
            return this.gameStatus = false;
        }
    }
}

module.exports = Game; 