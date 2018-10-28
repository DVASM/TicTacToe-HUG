// Game class tests
const Game = require('./game');
// Constructor test
test('Should intitialize gameStatus as true', () => {
    const testGame = new Game(); 
    expect(testGame.gameStatus).toBeTruthy();
});
test('Should initialize player symbol as X', () => {
    const testGame = new Game(); 
    expect(testGame.playerTurn).toBe('X');
});
test('Should return a gameboard as array', () => {
    const testGame = new Game(); 
    expect.arrayContaining([[{"box": ""}, {"box": ""}, {"box": ""}], [{"box": ""}, {"box": ""}, {"box": ""}], [{"box": ""}, {"box": ""}, {"box": ""}]]);
});