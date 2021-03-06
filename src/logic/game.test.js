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

// changePlayer symbol O 
test('Should change player to X, if current player is O', () => {
    const testGame = new Game(); 
    testGame.playerTurn = 'O';
    testGame.changePlayer(); 
    expect(testGame.playerTurn).toBe('X');
});

// changePlayer Game is over
test('Should not change player if game is over', () => {
    const testGame = new Game(); 
    testGame.gameStatus = false;
    testGame.playerTurn = 'O';
    testGame.changePlayer(); 
    expect(testGame.playerTurn).toBe('O');
});