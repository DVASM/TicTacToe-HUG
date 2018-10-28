// Square test
const Square = require('./square');
// Constructor test
test('Should return an empty object', () => {
    var testSquare = new Square(''); 
    expect(testSquare).toEqual({box : ''});
});