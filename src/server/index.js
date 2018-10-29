const express = require("express");
const router = express.Router();
const game = require("../logic/game");


router.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed here, try OPTIONS." });
});













module.exports = router;