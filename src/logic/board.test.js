const Board = require('./board');

// test for board
test('return an array with an empty string', () => {
    const testBoard = new Board();
    expect.arrayContaining([[{"box": ""}, {"box": ""}, {"box": ""}], [{"box": ""}, {"box": ""}, {"box": ""}], [{"box": ""}, {"box": ""}, {"box": ""}]]);
});

// constructor test ()
test('Should return an array with an empty string', () => {
    const testBoard = new Board();
    expect.arrayContaining([[{"box": ""}, {"box": ""}, {"box": ""}], [{"box": ""}, {"box": ""}, {"box": ""}], [{"box": ""}, {"box": ""}, {"box": ""}]]);
});
