// Board test file
const Board = require('./board');

// test for board
test('return an array with an empty string', () => {
    const testBoard = new Board();
    expect.arrayContaining([[{"box": ""}, {"box": ""}, {"box": ""}], [{"box": ""}, {"box": ""}, {"box": ""}], [{"box": ""}, {"box": ""}, {"box": ""}]]);
});
// makeMove counter increment test
test('Should increment counter + 1 when called', () => {
    const testBoard = new Board(); 
    const testRow = 0; 
    const testCol = 0; 
    const testPlayer = 'X';
    testBoard.makeMove(testRow, testCol, testPlayer);
    expect(testBoard.counter).toBe(1);
});
// makeMove return true
test('Should return true if input has been placed', () => {
    const testBoard = new Board(); 
    const testRow = 0; 
    const testCol = 0; 
    const testPlayer = 'X';
    expect(testBoard.makeMove(testRow, testCol, testPlayer)).toBeTruthy(); 
});
// makeMove return false
test('Should return true if input has been placed', () => {
    const testBoard = new Board(); 
    const testRow = 0; 
    const testCol = 0; 
    const testPlayer = 'X';
    testBoard.makeMove(testRow, testCol, testPlayer);
    expect(testBoard.makeMove(testRow, testCol, testPlayer)).toBeFalsy(); 

});
// checkWinner vertical test 
test('Should return true if winning conditions have been met horizontally', () => {
    const testBoard = new Board(); 
    testBoard.grid[0][0].box = 'X';
    testBoard.grid[1][0].box = 'X';
    testBoard.grid[2][0].box = 'X';
    expect(testBoard.checkWinner()).toBeTruthy(); 
});
// checkWinner horizontal test
test('Should return true if winning conditions have been met horizontally', () => {
    const testBoard = new Board(); 
    testBoard.grid[0][0].box = 'X';
    testBoard.grid[0][1].box = 'X';
    testBoard.grid[0][2].box = 'X';
    expect(testBoard.checkWinner()).toBeTruthy();
});
// checkWinner kriss test 
test('Should return true if winning conditions have been met horizontally', () => {
    const testBoard = new Board(); 
    testBoard.grid[0][0].box = 'X';
    testBoard.grid[1][1].box = 'X';
    testBoard.grid[2][2].box = 'X';
    expect(testBoard.checkWinner()).toBeTruthy();
});
// checkWinner kross test 
test('Should return true if winning conditions have been met horizontally', () => {
    const testBoard = new Board(); 
    testBoard.grid[0][2].box = 'X';
    testBoard.grid[1][1].box = 'X';
    testBoard.grid[2][0].box = 'X';
    expect(testBoard.checkWinner()).toBeTruthy();
});
// CheckWinner draw
test('Should return true if winning conditions have been met horizontally', () => {
    const testBoard = new Board(); 
    testBoard.counter = 9; 
    expect(testBoard.checkWinner()).toBeTruthy();
});