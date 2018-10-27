Design report
=======
## How it works
TicTacToe is a game played by two players. The gameboard consists of a  
3x3 grid and players take turn selecting a square from the grid.  
A game is won if either player has marked 3 squares in a row, horizontaly,  
verticaly or diagonaly. If these conditions are not fulfilled, the game  
will result in a draw.

## The design
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

![Image](https://image.ibb.co/i8jGbV/Tic-Tac-Toe.png "class diagram")
