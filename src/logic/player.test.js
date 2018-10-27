// Player test
const Player = require('./player');
// Constructor test
test('Should return an empty object', () => {
    var testPlayer = new Player(); 
    expect(testPlayer).toEqual({symbol : undefined});
});
