Design report
=======
## How it works
TicTacToe is a game played by two players. The gameboard consists of a  
3x3 grid and players take turn selecting a square from the grid.  
A game is won if either player has marked 3 squares in a row, horizontaly,  
verticaly or diagonaly. If these conditions are not fulfilled, the game  
will result in a draw.

## The design
## First version
For our first version of the game, our design will be simple.  
It will be split into 4 classes. The first and the main class will be called TicTacToe.  
It’s variables will be 2 players, 1 WinCondition and 1 board.  
First it will construct a TicTacToe game using these variables,  
then it will have 2 other functions: Play() and Stop().  
The player class has the variable name (X or O). It also has the function Perform turn.  
The board class has the variable dimension, typically it will be set to 3,  
then it has a constructor that creates the board and a function that resets the board.  
We will aslo have the WinCondition class. As the name suggests, it checks  
the win conditions and returns the winner or if it’s a draw. It also returns whose move it is.

![Image](https://image.ibb.co/i8jGbV/Tic-Tac-Toe.png "class diagram1")

## Final version
The final version of the game ended with only three classes.  
The first class is the Square class. The constructor creates a box and  
and the class has the functions isEmpty, which checks if the box is empty  
and placeInput, which fills the box with a newsign.  
The second class is the Board class. It fills the board with 9 squares  
and also has a counter to check if all the squares are full.  
The functions are printSquares, makeMove which fills a certain box with a char  
and checkWinner which checks if the game has ended.  
Finally the main class is the Game class. It's constructor has a board, a boolean  
for game status and char for playerTurn.  
It's functions are gameEnded, changePlayer, printTable and playerMove which performs a move  

![Image](https://image.ibb.co/b6Kyaq/Untitled-Diagram.png "class diagram2")
