// Square test
const Square = require('./square');
// Constructor test
test('Should return an empty object', () => {
    var testSquare = new Square(); 
    expect(testSquare).toEqual({box : ""});
});
// Test place X in square
test("Should place a symbol to equal player X",() =>{
    var testSquare = new Square();
    var testCounter = 0;
    testSquare.makeMove(testCounter);
    expect(testSquare.box).toEqual('X');
});
// Test place O in square
test("Should place a symbol to equal player O",() =>{
    var testSquare = new Square();
    var testCounter = 1;
    testSquare.makeMove(testCounter);
    expect(testSquare.box).toEqual('O');
});
// Test if the square is available
test('Should return true if the box is not already occupied', () => {
    var testSquare = new Square(); 
    var testCounter = 0; 
    expect(testSquare.makeMove(testCounter)).toBeTruthy();
});