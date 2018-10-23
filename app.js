//app.js
const api = require("./src/server/api");

const server = require("./server");
server.use("/",api);

server.get("*",(req,res)=> {
    res.send({error: "No route defined"});
});