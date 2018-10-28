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