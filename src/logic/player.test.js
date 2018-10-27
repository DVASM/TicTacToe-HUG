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
// Testing creating multiple players 
test('Should create a player marked X', () => {
    var testPlayers = [new Player('X'), new Player('O')];
    expect(testPlayers).toContainEqual({symbol : 'X'}, {symbol : 'O'});
});