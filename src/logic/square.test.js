// Square test
const Square = require('./square');
// Constructor test
test('Should return an empty object', () => {
    var testSquare = new Square(); 
    expect(testSquare).toEqual({box : ""});
});

test("should place a symbol to equal player X",() =>{
    var testSquare = new Square();
    var testCounter = 0;
    testSquare.makeMove(testCounter);
    expect(testSquare.box).toEqual('X');
});