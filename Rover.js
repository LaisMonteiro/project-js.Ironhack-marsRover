// Rover object:
var moonCar1 = {
    name: "Car1",
    directions: "N",
    x: 9,
    y: 0,
    travelLog:[]
}
var moonCar2 = {
    name:"Car2",
    directions: "N",
    x: 4,
    y: 0,
    travelLog:[]
}
var obstacles = {
    positionA: [0,7]
}

// ======================
  function commands(rover,arg1){
    for (var i =0; i < arg1.length; i++){
      if(arg1[i] == "l"){
        turnLeft(rover)
      }else if (arg1[i] == "r"){
        turnRight(rover)
      }else if (arg1[i] == "f"){
        moveForward(rover)
      }else if (arg1[i]== "b"){
        moveBackwards(rover)
      }else{
         console.log("[ERROR] Type a valid comand")
      }
    }
  }
  function turnLeft(rover){
    if (rover.directions == "N"){
      console.log("turnLeft was called!");
      rover.directions = "W"
      console.log(rover.name+" is now facing "+ rover.directions)
    }else if (rover.directions == "W"){
      console.log("turnLeft was called!");
      rover.directions = "S"
      console.log(rover.name+" is now facing "+ rover.directions)
    }else if (rover.directions == "S"){
      console.log("turnLeft was called!");
      rover.directions = "E"
      console.log(rover.name+" is now facing "+ rover.directions)
    }else if (rover.directions == "E"){
      console.log("turnLeft was called!");
      rover.directions = "N"
      console.log(rover.name+" is now facing "+ rover.directions)
    }
  }
  function turnRight(rover){
    if (rover.directions == "N"){
      console.log("turnRight was called!");
      rover.directions = "E"
      console.log(rover.name+" is now facing "+ rover.directions)
    }else if (rover.directions == "E"){
      console.log("turnRight was called!");
      rover.directions = "S"
      console.log(rover.name+" is now facing "+ rover.directions)
    }else if (rover.directions == "S"){
      console.log("turnRight was called!");
      rover.directions = "W"
      console.log(rover.name+" is now facing "+ rover.directions)
    }else if (rover.directions == "W"){
      console.log("turnRight was called!");
      rover.directions = "N"
      console.log(rover.name+" is now facing "+ rover.directions)
    }
  }
  function moveForward(rover){
    if (rover.directions == "N"){
      console.log("moveForwards was called!");
      rover.directions = "N"
      if (rover.y > 0 && rover.y <= 9){
        rover.y--
        if (rover.x == obstacles.positionA[0] && rover.y == obstacles.positionA[1] || moonCar2.x == moonCar1.x && moonCar2.y == moonCar1.y){
            rover.y++
            console.log("There is a rock, can not go foward")
            console.log(rover.name+" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)           
        }else{
        rover.travelLog.push([rover.x,rover.y,rover.directions])
        console.log(rover.name +" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)
        }
      }else{
        console.log("Not possible")
      }
    }else if (rover.directions == "W"){
      console.log("moveForwards was called!");
      rover.directions = "W"
      if (rover.x > 0 && rover.x <= 9){
        rover.x--
        if(rover.x == obstacles.positionA[0] && rover.y == obstacles.positionA[1] || moonCar2.x == moonCar1.x && moonCar2.y == moonCar1.y){
            rover.x++
            console.log("There is a rock, can not go foward")
            console.log(rover.name +" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)
        }else{
            rover.travelLog.push([rover.x,rover.y,rover.directions])
            console.log(rover.name +" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)
        }
      }else{
        console.log("Not possible")
      }
    }else if (rover.directions == "S"){
      console.log("moveForwards was called!");
      rover.directions = "S"
      if (rover.y >= 0 && rover.y < 9){
        rover.y++
          if (rover.x == obstacles.positionA[0] && rover.y == obstacles.positionA[1] || moonCar2.x == moonCar1.x && moonCar2.y == moonCar1.y){
            rover.y--
            console.log("There is a rock, can not go foward")
            console.log(rover.name+" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)
          }else{
          rover.travelLog.push([rover.x,rover.y,rover.directions])
          console.log(rover.name+" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)
          }
      }else{
        console.log("Not possible")
      }
    }else if (rover.directions == "E"){
      console.log("moveForwards was called!");
      rover.directions = "E"
      if (rover.x >= 0 && rover.x < 9){
        rover.x++
        if(rover.x == obstacles.positionA[0] && rover.y == obstacles.positionA[1] || moonCar2.x == moonCar1.x && moonCar2.y == moonCar1.y){
            rover.x--
            console.log("There is a rock, can not go foward")
            console.log(rover.name +" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)
        }else{
            rover.travelLog.push([rover.x,rover.y,rover.directions])
            console.log(rover.name +" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)
        }
       }else{
        console.log("Not possible")
      }
    }
  }
  function moveBackwards(rover){
    if (rover.directions == "N"){
      console.log("moveBackwards was called!");
      rover.directions = "N"
      if (rover.y >= 0 && rover.y < 9){
        rover.y++
        if (rover.x == obstacles.positionA[0] && rover.y == obstacles.positionA[1] || moonCar2.x == moonCar1.x && moonCar2.y == moonCar1.y){
            rover.y--
            console.log("There is a rock, can not go foward")
            console.log(rover.name+" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)           

        }else{
            rover.travelLog.push([rover.x,rover.y,rover.directions])
            console.log(rover.name+" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)
        }
    }else{
        console.log("Not possible")
      }
    }else if (rover.directions == "W"){
      console.log("moveBackwards was called!");
      rover.directions = "W"
      if (rover.x >= 0 && rover.x < 9){
        rover.x++
        if(rover.x == obstacles.positionA[0] && rover.y == obstacles.positionA[1] || moonCar2.x == moonCar1.x && moonCar2.y == moonCar1.y){
            rover.x--
            console.log("There is a rock, can not go foward")
            console.log(rover.name+" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)           
        }else{
            rover.travelLog.push([rover.x,rover.y,rover.directions])
            console.log(rover.name+" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)
        }
    }else{
        console.log("Not possible")
      }
    }else if (rover.directions == "S"){
      console.log("moveBackwards was called!");
      rover.directions = "S"
      if (rover.y > 0 && rover.y <= 9){
        rover.y--
        if(rover.x == obstacles.positionA[0] && rover.y == obstacles.positionA[1] || moonCar2.x == moonCar1.x && moonCar2.y == moonCar1.y){
            rover.y++
            console.log("There is a rock, can not go foward")
            console.log(rover.name+" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)           
        }else{
            rover.travelLog.push([rover.x,rover.y,rover.directions])
            console.log(rover.name+" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)
        } 
      }else{
        console.log("Not possible")
      }
    }else if (rover.directions == "E"){
      console.log("moveBackwards was called!");
      rover.directions = "E"
      if (rover.x > 0 && rover.x <= 9){
        rover.x--
        if(rover.x == obstacles.positionA[0] && rover.y == obstacles.positionA[1] || moonCar2.x == moonCar1.x && moonCar2.y == moonCar1.y){
            rover.x++
            console.log("There is a rock, can not go foward")
            console.log(rover.name+" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)           
        }else{
            rover.travelLog.push([rover.x,rover.y,rover.directions])
            console.log(rover.name+" is now facing "+ rover.directions +" position is "+ rover.x, rover.y)
        }
       }else{
        console.log("Not possible")
      }
    }
  }


// Actions
  commands(moonCar2,"rfbfrj")
  commands(moonCar1,"bbrfl")
 
// Logs
  console.log(`O log do`,moonCar1.name," é ", moonCar1.travelLog)
  console.log(`O log do`,moonCar2.name," é ", moonCar2.travelLog)