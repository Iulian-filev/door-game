let doorImage1=document.getElementById("door1");
let doorImage2=document.getElementById("door2");
let doorImage3=document.getElementById("door3");
let botDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let opendoor1;
let opendoor2;
let opendoor3;

playDoor= () =>{
  numClosedDoors --;
  if (numClosedDoors ===0){
      gameOver();
      }

};

randomChoreDoorGenerator =() =>{
 const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor===0){
    opendoor1=botDoorPath;
        opendoor2=beachDoorPath;
    opendoor3=spaceDoorPath;
  }
  else if (choreDoor===1){
    opendoor2=botDoorPath;
    opendoor1=beachDoorPath;
    opendoor3=spaceDoorPath;
  }
  else {
    opendoor3=botDoorPath;
        opendoor1=beachDoorPath;
    opendoor2=spaceDoorPath;
  }
};

doorImage1.onclick = () => {
  doorImage1.src = opendoor1;
};
doorImage2.onclick = () => {
  doorImage2.src = opendoor2;

};
doorImage3.onclick = () => {
  doorImage3.src = opendoor3;

};
randomChoreDoorGenerator();
playDoor();
