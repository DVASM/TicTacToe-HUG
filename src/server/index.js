const express = require("express");
const router = express.Router();
const game = require("../logic/game");


var newGame;
var playerTurn;


router.get("/", (req, res) => {
    res.status(405).send({ error: "GET method not allowed here, try OPTIONS." });
});

router.options("/", (req, res) => {
    const options = {
        options: { get: ["/closegame", "/newgame", "/resetboard", "makemove/{var1}/{var2}"] }
    };
    res.status(200).send(options);
});


router.get("/newgame", (req, res) => {
    console.log('initializing new game');
    newGame = new game();
    playerMove = newGame.playerTurn;
    res.status(200).send({game: newGame});
  });



module.exports = router;