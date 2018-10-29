// index.jsimport style from './styles.css'
var player = "O";
var boxes = document.getElementsByClassName('box');
var resetButton = document.getElementById("reset-button");
var headLine = document.getElementById("player-turn-text");

resetButton.addEventListener("click", function () {newGame()});

function newGame() {
    //for(i = 0; i< boxes.length)
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        boxes[i].disabled = false;
    };
    fetch("/game/newgame")
        .then(function (res) {
            return res.json();
        })
    headLine.innerHTML = "X, It's your turn!";
}



newGame();