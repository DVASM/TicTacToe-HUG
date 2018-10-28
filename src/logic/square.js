
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
    }
}
module.exports = Square; 