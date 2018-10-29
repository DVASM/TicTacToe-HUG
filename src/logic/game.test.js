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

// gameEnded return gamestatus = false
test('Should return true if a winning condition has been met, or draw', () => {
    const testGame = new Game(); 
    expect(testGame.gameEnded()).toBeFalsy(); 
});

// changePlayer symbol X 
test('Should change player to O, if current player is X', () => {
    const testGame = new Game(); 
    testGame.changePlayer(); 
    expect(testGame.playerTurn).toBe('O');
});

