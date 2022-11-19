var express = require("express");

var app = express();

app.use(express.static("final"));

app.get("/", function(req, res){

res.redirect("index.html");

});

app.listen(3000, function(){

console.log("Example is running on port 3000");

});

io.on('connection', function (socket) {

  for(var i in matrix) {
  
  socket.emit("display matrix", matrix[i]);
  
  }
  
  socket.on("send matrix", function (matrix) {
  
  messages.push(matrix);
  
  io.sockets.emit("display matrix", matrix);
  
  });
  
  });


let Grass = require("./Grass")
let GrassEater = require("./GrassEater")
let Monster = require(".Monster")
let Weed = require("./Weed")
let Predator = require("./Predator")


var matrix = [];
let side = 120;
let grasses = [];
let grassEaters = [];
let weeds = [];
let predators = [];
let monsters = [];

function createObject(){
    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
      let grassesObj =  new Grass(x, y);
      grasses.push(grassesObj)
      }
      else if (matrix[y][x] == 2){
      let grEat = new GrassEater(x,y)
        grassEaters.push(grEat)
        }
        else if(matrix[y][x] == 3){
          let pd = new Predator(x,y)
          predators.push(pd)
        }

        else if(matrix[y][x] == 4){
         let wd = new Weed(x,y)
         weeds.push(wd)
        }
        else if(matrix[y][x] == 5){
          let mnst = new Monster(x,y)
          monsters.push(mnst)
        }
      
      }
      }
    }
    function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount,weedCount,monsterCount) {
      for (let i = 0; i < matrixSize; i++) {
      matrix[i] = []
      for (let o = 0; o < matrixSize; o++) {
      matrix[i][o] = 0;
      }
      }
      for (let i = 0; i < grassCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 1;
      }
      for (let i = 0; i < grassEaterCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 2;
      }
      for (let i = 0; i < predatorCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 3;
      }
      for (let i = 0; i < weedCount; i++) {
        let x = Math.floor(random(matrixSize));
        let y = Math.floor(random(matrixSize));
        matrix[y][x] = 4;
        }
        for (let i = 0; i < monsterCount; i++) {
          let x = Math.floor(random(matrixSize));
          let y = Math.floor(random(matrixSize));
          matrix[y][x] = 5;
          }
      
      }
      matrixGenerator(20, 40, 20, 20,20,10)
  
    createObject()

