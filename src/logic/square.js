
class Square {
    constructor() {
        this.box = '';
    }

    makeMove(counter) {
        console.log('Placing symbol....');
        if (counter === 0 && this.box === '') {
            this.box = 'X';
            return true; 
        }
        else if (counter === 1 && this.box === '') {
            this.box = 'O';
            return true; 
        }
    }
}
module.exports = Square; 