// index.js
import style from './styles.css';
var player = "O";
var counter = 0; 
var boxes = document.getElementsByClassName('box');
var resetButton = document.getElementById("reset-button");
var headLine = document.getElementById("player-turn-text");

resetButton.addEventListener("click", function () {newGame()});

boxes[0].addEventListener("click", function () { selectBox(0, 0); });
boxes[1].addEventListener("click", function () { selectBox(0, 1); });
boxes[2].addEventListener("click", function () { selectBox(0, 2); });
boxes[3].addEventListener("click", function () { selectBox(1, 0); });
boxes[4].addEventListener("click", function () { selectBox(1, 1); });
boxes[5].addEventListener("click", function () { selectBox(1, 2); });
boxes[6].addEventListener("click", function () { selectBox(2, 0); });
boxes[7].addEventListener("click", function () { selectBox(2, 1); });
boxes[8].addEventListener("click", function () { selectBox(2, 2); });


function newGame() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        boxes[i].disabled = false;
    };
    fetch("/game/newgame")
        .then(function (res) {
            return res.json();
        })
    headLine.innerHTML = "X, It's your turn!";
    counter = 0; 
}

function selectBox(var1, var2) {
    counter++;
    headLine.innerHTML = player + " it's your turn!";
    var getId = var1.toString() + var2.toString();
    fetch("/game/makemove/" + var1 + "/" + var2)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            document.getElementById(getId).innerHTML = data.fillsquare;
            player = data.fillsquare; //heldur utan um playerbreytuna til ad geta synt hana rett a skja
            document.getElementById(getId).disabled = true;
            if (!data.gameStatus) {
                for (var i = 0; i < boxes.length; i++) {
                    boxes[i].disabled = true;
                };
                if(counter === 9) {
                    headLine.innerHTML = "Draw!";
                }
                else {
                    headLine.innerHTML = "Winner is: " + data.fillsquare;
                }
            }
        });
    }

newGame();