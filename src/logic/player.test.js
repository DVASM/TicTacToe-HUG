// Player test
const Player = require('./player');
// Constructor test
test('Should return an empty object', () => {
    var testPlayer = new Player(); 
    expect(testPlayer).toEqual({symbol : undefined});
});
// Testing create new player
test('Should create a player marked X', () => {
    var testPlayer = new Player('X');
    expect(testPlayer).toEqual({symbol : 'X'});
});
