
function setup(){
  
 frameRate(1)
 createCanvas(matrix[0].length * side, matrix.length * side)
 background("gray")
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
    if (matrix[y][x] == 1) {
    fill("green");
    rect(x * side, y * side, side, side);
    }
    else if (matrix[y][x] == 0) {
    fill("#acacac");
    rect(x * side, y * side, side, side);
    }
    else if(matrix[y][x] == 2){
      fill("yellow");
      rect(x * side, y * side, side, side);
    }
    else if(matrix[y][x] == 3){
      fill("red")
      rect(x * side, y * side, side, side);
    }
    else if(matrix[y][x] == 4){
      fill(29, 65, 42)
      rect(x * side, y * side, side, side);
    }
    else if(matrix[y][x] == 5){
      fill("purple")
      rect(x * side, y * side, side, side)
    }
  }
    }

  for(let i in grasses){
      grasses[i].mull();
  }

  for(let i in grassEaters){
    grassEaters[i].eat()
    
    
  }

  for(let i in predators){
    predators[i].eat()
  }

  for(let i in weeds){
   weeds[i].killing()
  }

  for(let i in monsters){
    monsters[i].move()
    monsters[i].eatersEat()
    }

  }



