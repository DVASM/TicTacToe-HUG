// Square test
const Square = require('./square');
// Constructor test
test('Should return an empty object', () => {
    var testSquare = new Square(''); 
    expect(testSquare).toEqual({box : ''});
});
// Test place X in square
test("Should place a symbol to equal player X",() =>{
    var testSquare = new Square();
    var testPlyer = 'X';
    testSquare.placeInput(testPlyer);
    expect(testSquare.box).toEqual('X');
});
// Test place O in square
test("Should place a symbol to equal player O",() =>{
    var testSquare = new Square();
    var testPlyer = 'O';
    testSquare.placeInput(testPlyer);
    expect(testSquare.box).toEqual('O');
});