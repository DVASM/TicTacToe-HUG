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

    // Swap between players
    changePlayer() {
        if (this.playerTurn === "X" && this.gameStatus === true) {
            this.playerTurn = "O";
        }
        else if (this.playerTurn === 'O' && this.gameStatus === true) {
            this.playerTurn = "X";
        }
        else {
            console.log('Game is over.');
        }
}


}

module.exports = Game; 