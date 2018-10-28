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
// Should return true if box is not occupied
test('Should return true if the box is not already occupied', () => {
    var testSquare = new Square(''); 
    expect(testSquare.isEmpty()).toBeTruthy(); 
});
// Test if the square is taken
test('Should return false if the box occupied', () => {
    var testSquare = new Square('X');  
    expect(testSquare.isEmpty()).toBeFalsy(); 
}); 