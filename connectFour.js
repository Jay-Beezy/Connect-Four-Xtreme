/*
@author Jake Beesley
@file connectFour.js
@date 12/3/2020
@brief

  This code is an enhancement of the previous ConnectFour project.

  Differences:
    Three players instead of Two
    10x10 board instead of standard 7x6
    The four winning chips now have a golden outline around them, easier to distinguish the winner quicker
    Spacebar can now be used to reset the board at any time

*/

let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext('2d');

context.font = "40pt Calibri";
context.fillStyle = "red";

var boardArray = new Array(10);
for(let i = 0; i < 10; i++){
  boardArray[i] = new Array(10);
  for(let j = 0; j < 10; j++){
    boardArray[i][j] = 0;
  }
}

var playerCounter = 0; //Used to determine which player is next
var playerOneWinner = 0; //Changed to 1 when playerOne wins
var playerTwoWinner = 0; //Changed to 1 when playerTwo wins
var playerThreeWinner = 0;

//Checks if the column is within the appropriate bounds, then scans the board to see if a chip can be placed
function validMarker(columnSelection){
  if(columnSelection < 0 || columnSelection > 10){
    return(false);
  }
  else{
    for(let j = 0; j < 10; j++){
      if(boardArray[columnSelection][0] == 1 || boardArray[columnSelection][0] == 2 || boardArray[columnSelection][0] == 3){
        //playerCounter is decremented because othewise the player that selected
        //the invalid column would lose their turn.
        --playerCounter;
        return(false);
      }
      else{ //If the column is between 0 and 6 and doesnt have 6 chips in it
        return(true);
      }
    }
  }
}

//Places a 1 at the corresponding column on boardArray
function placemarkerplayerOne(columnSelection){
  if(validMarker(columnSelection) == true){
    if(boardArray[columnSelection][9] == 0 && boardArray[columnSelection][9] != 2 && boardArray[columnSelection][9] != 3){
      boardArray[columnSelection][9] = 1;
    }
    else if(boardArray[columnSelection][8] == 0 && boardArray[columnSelection][8] != 2 && boardArray[columnSelection][8] != 3){
      boardArray[columnSelection][8] = 1;
    }
    else if(boardArray[columnSelection][7] == 0 && boardArray[columnSelection][7] != 2 && boardArray[columnSelection][7] != 3){
      boardArray[columnSelection][7] = 1;
    }
    else if(boardArray[columnSelection][6] == 0 && boardArray[columnSelection][6] != 2 && boardArray[columnSelection][6] != 3){
      boardArray[columnSelection][6] = 1;
    }
    else if(boardArray[columnSelection][5] == 0 && boardArray[columnSelection][5] != 2 && boardArray[columnSelection][5] != 3){
      boardArray[columnSelection][5] = 1;
    }
    else if(boardArray[columnSelection][4] == 0 && boardArray[columnSelection][4] != 2 && boardArray[columnSelection][4] != 3){
      boardArray[columnSelection][4] = 1;
    }
    else if(boardArray[columnSelection][3] == 0 && boardArray[columnSelection][3] != 2 && boardArray[columnSelection][3] != 3){
      boardArray[columnSelection][3] = 1;
    }
    else if(boardArray[columnSelection][2] == 0 && boardArray[columnSelection][2] != 2 && boardArray[columnSelection][2] != 3){
      boardArray[columnSelection][2] = 1;
    }
    else if(boardArray[columnSelection][1] == 0 && boardArray[columnSelection][1] != 2 && boardArray[columnSelection][1] != 3){
      boardArray[columnSelection][1] = 1;
    }
    else if(boardArray[columnSelection][0] == 0 && boardArray[columnSelection][0] != 2 && boardArray[columnSelection][0] != 3){
      boardArray[columnSelection][0] = 1;
    }
  }
}

//Places a 2 at the corresponding column on boardArray
function placemarkerplayerTwo(columnSelection){
  if(validMarker(columnSelection) == true){
    if(boardArray[columnSelection][9] == 0 && boardArray[columnSelection][9] != 1 && boardArray[columnSelection][9] != 3){
      boardArray[columnSelection][9] = 2;
    }
    else if(boardArray[columnSelection][8] == 0 && boardArray[columnSelection][8] != 1 && boardArray[columnSelection][8] != 3){
      boardArray[columnSelection][8] = 2;
    }
    else if(boardArray[columnSelection][7] == 0 && boardArray[columnSelection][7] != 1 && boardArray[columnSelection][7] != 3){
      boardArray[columnSelection][7] = 2;
    }
    else if(boardArray[columnSelection][6] == 0 && boardArray[columnSelection][6] != 1 && boardArray[columnSelection][6] != 3){
      boardArray[columnSelection][6] = 2;
    }
    else if(boardArray[columnSelection][5] == 0 && boardArray[columnSelection][5] != 1 && boardArray[columnSelection][5] != 3){
      boardArray[columnSelection][5] = 2;
    }
    else if(boardArray[columnSelection][4] == 0 && boardArray[columnSelection][4] != 1 && boardArray[columnSelection][4] != 3){
      boardArray[columnSelection][4] = 2;
    }
    else if(boardArray[columnSelection][3] == 0 && boardArray[columnSelection][3] != 1 && boardArray[columnSelection][3] != 3){
      boardArray[columnSelection][3] = 2;
    }
    else if(boardArray[columnSelection][2] == 0 && boardArray[columnSelection][2] != 1 && boardArray[columnSelection][2] != 3){
      boardArray[columnSelection][2] = 2;
    }
    else if(boardArray[columnSelection][1] == 0 && boardArray[columnSelection][1] != 1 && boardArray[columnSelection][1] != 3){
      boardArray[columnSelection][1] = 2;
    }
    else if(boardArray[columnSelection][0] == 0 && boardArray[columnSelection][0] != 1 && boardArray[columnSelection][0] != 3){
      boardArray[columnSelection][0] = 2;
    }
  }
}

//Places a 3 at the corresponding column on boardArray
function placemarkerplayerThree(columnSelection){
  if(validMarker(columnSelection) == true){
    if(boardArray[columnSelection][9] == 0 && boardArray[columnSelection][9] != 1 && boardArray[columnSelection][9] != 2){
      boardArray[columnSelection][9] = 3;
    }
    else if(boardArray[columnSelection][8] == 0 && boardArray[columnSelection][8] != 1 && boardArray[columnSelection][8] != 2){
      boardArray[columnSelection][8] = 3;
    }
    else if(boardArray[columnSelection][7] == 0 && boardArray[columnSelection][7] != 1 && boardArray[columnSelection][7] != 2){
      boardArray[columnSelection][7] = 3;
    }
    else if(boardArray[columnSelection][6] == 0 && boardArray[columnSelection][6] != 1 && boardArray[columnSelection][6] != 2){
      boardArray[columnSelection][6] = 3;
    }
    else if(boardArray[columnSelection][5] == 0 && boardArray[columnSelection][5] != 1 && boardArray[columnSelection][5] != 2){
      boardArray[columnSelection][5] = 3;
    }
    else if(boardArray[columnSelection][4] == 0 && boardArray[columnSelection][4] != 1 && boardArray[columnSelection][4] != 2){
      boardArray[columnSelection][4] = 3;
    }
    else if(boardArray[columnSelection][3] == 0 && boardArray[columnSelection][3] != 1 && boardArray[columnSelection][3] != 2){
      boardArray[columnSelection][3] = 3;
    }
    else if(boardArray[columnSelection][2] == 0 && boardArray[columnSelection][2] != 1 && boardArray[columnSelection][2] != 2){
      boardArray[columnSelection][2] = 3;
    }
    else if(boardArray[columnSelection][1] == 0 && boardArray[columnSelection][1] != 1 && boardArray[columnSelection][1] != 2){
      boardArray[columnSelection][1] = 3;
    }
    else if(boardArray[columnSelection][0] == 0 && boardArray[columnSelection][0] != 1 && boardArray[columnSelection][0] != 2){
      boardArray[columnSelection][0] = 3;
    }
  }
}

//Shows the users the available columns to select with their keyboard
const columnHelper = {
  columns : ['1','2','3','4','5','6','7','8','9','0']
}

function splatColumns(){
  for(let i = 0; i < 10; i++){
    context.fillStyle = 'black';
    context.fillText(columnHelper.columns[i], 35 + i * 85, 920);
  }
}

function checkWinner(){
  if(playerCounter < 100){
    if(checkHorizontal() == 1){
      console.log("Player one wins horizontally!");
      playerOneWinner = 1;
      return(true);
    }
    else if(checkHorizontal() == 2){
      console.log("Player two wins horizontally!");
      playerTwoWinner = 1;
      return(true);
    }
    else if(checkHorizontal() == 3){
      console.log("Player three wins horizontally!");
      playerThreeWinner = 1;
      return(true);
    }
    else if(checkVertical() == 1){
      console.log("Player one wins vertically!");
      playerOneWinner = 1;
      return(true);
    }
    else if(checkVertical() == 2){
      console.log("Player two wins vertically!");
      playerTwoWinner = 1;
      return(true);
    }
    else if(checkVertical() == 3){
      console.log("Player three wins vertically!");
      playerThreeWinner = 1;
      return(true);
    }
    else if(checkDiagonal() == 1){
      console.log("Player one wins diagonally!");
      playerOneWinner = 1;
      return(true);
    }
    else if(checkDiagonal() == 2){
      console.log("Player two wins diagonally!");
      playerTwoWinner = 1;
      return(true);
    }
    else if(checkDiagonal() == 3){
      console.log("Player three wins diagonally!");
      playerThreeWinner = 1;
      return(true);
    }
  }
  else{
    console.log("Chipcount exceeded, GAME OVER");
    return(true);
  }
}

function checkHorizontal(){
  for(let i = 0; i < 7; i++){
    for(let j = 0; j < 10; j++){
        if(boardArray[i][j] == 1 && boardArray[i+1][j] == 1 && boardArray[i+2][j] == 1 && boardArray[i+3][j] == 1){
          return(1);
        }
        else if(boardArray[i][j] == 2 && boardArray[i+1][j] == 2 && boardArray[i+2][j] == 2 && boardArray[i+3][j] == 2){
          return(2);
        }
        else if(boardArray[i][j] == 3 && boardArray[i+1][j] == 3 && boardArray[i+2][j] == 3 && boardArray[i+3][j] == 3){
          return(3);
        }
    }
  }
}

function checkVertical(){
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 7; j++){ //j < 3 so that the board doesnt scan an invalid position
        if(boardArray[i][j] == 1 && boardArray[i][j+1] == 1 && boardArray[i][j+2] == 1 && boardArray[i][j+3] == 1){
          return(1);
        }
        else if(boardArray[i][j] == 2 && boardArray[i][j+1] == 2 && boardArray[i][j+2] == 2 && boardArray[i][j+3] == 2){
          return(2);
        }
        else if(boardArray[i][j] == 3 && boardArray[i][j+1] == 3 && boardArray[i][j+2] == 3 && boardArray[i][j+3] == 3){
          return(3);
        }
    }
  }
}

function checkDiagonal(){
  if(checkRightDiagonal() == 1){
    return(1);
  }
  else if(checkRightDiagonal() == 2){
    return(2);
  }
  else if(checkRightDiagonal() == 3){
    return(3);
  }
  else if(checkLeftDiagonal() == 1){
    return(1);
  }
  else if(checkLeftDiagonal() == 2){
    return(2);
  }
  else if(checkLeftDiagonal() == 3){
    return(3);
  }
}

function checkRightDiagonal(){
  for(let i = 3; i < 10; i++){
    for(let j = 0; j < 7; j++){
        if(boardArray[i][j] == 1 && boardArray[i-1][j+1] == 1 && boardArray[i-2][j+2] == 1 && boardArray[i-3][j+3] == 1){
          return(1);
        }
        else if(boardArray[i][j] == 2 && boardArray[i-1][j+1] == 2 && boardArray[i-2][j+2] == 2 && boardArray[i-3][j+3] == 2){
          return(2);
        }
        else if(boardArray[i][j] == 3 && boardArray[i-1][j+1] == 3 && boardArray[i-2][j+2] == 3 && boardArray[i-3][j+3] == 3){
          return(3);
        }
    }
  }
}

function checkLeftDiagonal(){
  for(let i = 3; i < 10; i++){
    for(let j = 3; j < 10; j++){
        if(boardArray[i][j] == 1 && boardArray[i-1][j-1] == 1 && boardArray[i-2][j-2] == 1 && boardArray[i-3][j-3] == 1){
          return(1);
        }
        else if(boardArray[i][j] == 2 && boardArray[i-1][j-1] == 2 && boardArray[i-2][j-2] == 2 && boardArray[i-3][j-3] == 2){
          return(2);
        }
        else if(boardArray[i][j] == 3 && boardArray[i-1][j-1] == 3 && boardArray[i-2][j-2] == 3 && boardArray[i-3][j-3] == 3){
          return(3);
        }
    }
  }
}

function resetBoard(){
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      boardArray[i][j] = 0;
    }
  }
  playerOneWinner = 0;
  playerTwoWinner = 0;
  playerThreeWinner = 0;
  playerCounter = 0;
}

//Graphic for red player victory
function victoryRedPlayer(){
  context.beginPath();
  context.fillStyle = 'black';
  context.fillRect(0,945,865,155);
  context.stroke();

  context.beginPath();
  context.fillStyle = '#eb9834';
  context.fillRect(5,950,855,145);
  context.stroke();

  context.save();
  context.font = "50pt  Calibri"
  context.fillStyle = 'red';
  context.fillText("Player One (Red) Wins!", 135, 1020);
  context.restore();

  context.save();
  context.font = "20pt  Calibri"
  context.fillStyle = 'black';
  context.fillText("Hit [RESET] or [SPACEBAR] to play again!", 200, 1075);
  context.restore();
}

//Graphic for yellow player victory
function victoryYellowPlayer(){
  context.beginPath();
  context.fillStyle = 'black';
  context.fillRect(0,945,865,155);
  context.stroke();

  context.beginPath();
  context.fillStyle = '#eb9834';
  context.fillRect(5,950,855,145);
  context.stroke();

  context.save();
  context.font = "50pt  Calibri"
  context.fillStyle = 'yellow';
  context.fillText("Player Two (Yellow) Wins!", 90, 1020);
  context.restore();

  context.save();
  context.font = "20pt  Calibri"
  context.fillStyle = 'black';
  context.fillText("Hit [RESET] or [SPACEBAR] to play again!", 200, 1075);
  context.restore();
}

//Graphic for green player victory
function victoryGreenPlayer(){
  context.beginPath();
  context.fillStyle = 'black';
  context.fillRect(0,945,865,155);
  context.stroke();

  context.beginPath();
  context.fillStyle = '#eb9834';
  context.fillRect(5,950,855,145);
  context.stroke();

  context.save();
  context.font = "50pt  Calibri"
  context.fillStyle = 'green';
  context.fillText("Player Three (Green) Wins!", 75, 1020);
  context.restore();

  context.save();
  context.font = "20pt  Calibri"
  context.fillStyle = 'black';
  context.fillText("Hit [RESET] or [SPACEBAR] to play again!", 200, 1075);
  context.restore();
}

//Graphic for tie
function stalemate(){
  context.beginPath();
  context.fillStyle = 'black';
  context.fillRect(0,945,865,155);
  context.stroke();

  context.beginPath();
  context.fillStyle = '#eb9834';
  context.fillRect(5,950,855,145);
  context.stroke();

  context.save();
  context.font = "50pt  Calibri"
  context.fillStyle = 'Blue';
  context.fillText("Neither Player Won!", 175, 1020);
  context.restore();

  context.save();
  context.font = "20pt  Calibri"
  context.fillStyle = 'black';
  context.fillText("Hit [RESET] to play again!", 300, 1075);
  context.restore();
}

//Circle and rectangle functionality learned from w3schools.com
//Uses canvas arc method to draw circles at their respective location
//Uses canvas fillRect method to draw a rectangle behind the squares
//Source: https://www.w3schools.com/tags/canvas_arc.asp
//Source: https://www.w3schools.com/tags/canvas_fillrect.asp
function boardDesign() {
  //Puts a black rectangle behind the light blue one, to give it a black border
  context.beginPath();
  context.fillStyle = 'black';
  context.fillRect(0,0,865,865);
  context.stroke();

  //Puts a light blue rectangle on the canvas
  context.beginPath();
  context.fillStyle = '#03D5FF';
  context.fillRect(5,5,855,855);
  context.stroke();
  //Fills the canvas with black circles to give the white circles a better outline
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      context.beginPath();
      context.fillStyle = 'black';
      context.style = '3px';
      context.arc((50+85*i), (50+85*j), 40, 0, 2 * Math.PI);
      context.fill();
      context.stroke();
    }
  }
}

document.querySelector("body").addEventListener( "keydown", e => {
    let id = parseInt(e.key) - 1;
    console.log("Chip counter is currently at :", playerCounter)
    if (typeof(id) != "number") {
      return;
    }
    else if(checkWinner() == true || playerCounter == 100){
      console.log("Game Over!");
    }
    else{
      if(playerCounter % 3 == 0){ //Player One
        if(id == -1){
          placemarkerplayerOne(9);
          ++playerCounter;
        }
        else{
          placemarkerplayerOne(id);
          ++playerCounter;
        }
      }
      else if(playerCounter % 3 == 1){ //Player Two
        if(id == -1){
          placemarkerplayerTwo(9);
          ++playerCounter;
        }
        else{
          placemarkerplayerTwo(id);
          ++playerCounter;
        }
      }
      else{ //Player Three
        if(id == -1){
          placemarkerplayerThree(9);
          ++playerCounter;
        }
        else{
          placemarkerplayerThree(id);
          ++playerCounter;
        }
      }
    }
  }
);

function chipOutlineWinner(){
  if(playerOneWinner == 1){
    //Part of check horizontal
    for(let i = 0; i < 7; i++){
      for(let j = 0; j < 10; j++){
          if(boardArray[i][j] == 1 && boardArray[i+1][j] == 1 && boardArray[i+2][j] == 1 && boardArray[i+3][j] == 1){
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'red';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i+1)), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'red';
            context.style = '3px';
            context.arc((50+85*(i+1)), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i+2)), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'red';
            context.style = '3px';
            context.arc((50+85*(i+2)), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i+3)), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'red';
            context.style = '3px';
            context.arc((50+85*(i+3)), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
          }
      }
    }
    //Part of check vertical
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 7; j++){
          if(boardArray[i][j] == 1 && boardArray[i][j+1] == 1 && boardArray[i][j+2] == 1 && boardArray[i][j+3] == 1){
              //Draws winning outline
              context.beginPath();
              context.fillStyle = '#ffc800';
              context.style = '3px';
              context.arc((50+85*i), (50+85*j), 42, 0, 2 * Math.PI);
              context.fill();
              //Redraws the chip
              context.beginPath();
              context.fillStyle = 'red';
              context.style = '3px';
              context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
              context.fill();
              //Draws winning outline
              context.beginPath();
              context.fillStyle = '#ffc800';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+1)), 42, 0, 2 * Math.PI);
              context.fill();
              //Redraws the chip
              context.beginPath();
              context.fillStyle = 'red';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+1)), 37, 0, 2 * Math.PI);
              context.fill();
              //Draws winning outline
              context.beginPath();
              context.fillStyle = '#ffc800';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+2)), 42, 0, 2 * Math.PI);
              context.fill();
              //Redraws the chip
              context.beginPath();
              context.fillStyle = 'red';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+2)), 37, 0, 2 * Math.PI);
              context.fill();
              //Draws winning outline
              context.beginPath();
              context.fillStyle = '#ffc800';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+3)), 42, 0, 2 * Math.PI);
              context.fill();
              //Redraws the chip
              context.beginPath();
              context.fillStyle = 'red';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+3)), 37, 0, 2 * Math.PI);
              context.fill();
          }
      }
    }
    //Part of right diagonal
    for(let i = 3; i < 10; i++){
      for(let j = 0; j < 7; j++){
          if(boardArray[i][j] == 1 && boardArray[i-1][j+1] == 1 && boardArray[i-2][j+2] == 1 && boardArray[i-3][j+3] == 1){
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'red';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-1)), (50+85*(j+1)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'red';
            context.style = '3px';
            context.arc((50+85*(i-1)), (50+85*(j+1)), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-2)), (50+85*(j+2)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'red';
            context.style = '3px';
            context.arc((50+85*(i-2)), (50+85*(j+2)), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-3)), (50+85*(j+3)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'red';
            context.style = '3px';
            context.arc((50+85*(i-3)), (50+85*(j+3)), 37, 0, 2 * Math.PI);
            context.fill();
          }
      }
    }
    //Part of left diagonal
    for(let i = 3; i < 10; i++){
      for(let j = 3; j < 10; j++){
          if(boardArray[i][j] == 1 && boardArray[i-1][j-1] == 1 && boardArray[i-2][j-2] == 1 && boardArray[i-3][j-3] == 1){
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'red';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-1)), (50+85*(j-1)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'red';
            context.style = '3px';
            context.arc((50+85*(i-1)), (50+85*(j-1)), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-2)), (50+85*(j-2)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'red';
            context.style = '3px';
            context.arc((50+85*(i-2)), (50+85*(j-2)), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-3)), (50+85*(j-3)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'red';
            context.style = '3px';
            context.arc((50+85*(i-3)), (50+85*(j-3)), 37, 0, 2 * Math.PI);
            context.fill();
          }
      }
    }
  }
  if(playerTwoWinner == 1){
    //Part of check horizontal
    for(let i = 0; i < 7; i++){
      for(let j = 0; j < 10; j++){
          if(boardArray[i][j] == 2 && boardArray[i+1][j] == 2 && boardArray[i+2][j] == 2 && boardArray[i+3][j] == 2){
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'yellow';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i+1)), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'yellow';
            context.style = '3px';
            context.arc((50+85*(i+1)), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i+2)), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'yellow';
            context.style = '3px';
            context.arc((50+85*(i+2)), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i+3)), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'yellow';
            context.style = '3px';
            context.arc((50+85*(i+3)), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
          }
      }
    }
    //Part of check vertical
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 7; j++){
          if(boardArray[i][j] == 2 && boardArray[i][j+1] == 2 && boardArray[i][j+2] == 2 && boardArray[i][j+3] == 2){
              //Draws winning outline
              context.beginPath();
              context.fillStyle = '#ffc800';
              context.style = '3px';
              context.arc((50+85*i), (50+85*j), 42, 0, 2 * Math.PI);
              context.fill();
              //Redraws the chip
              context.beginPath();
              context.fillStyle = 'yellow';
              context.style = '3px';
              context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
              context.fill();
              //Draws winning outline
              context.beginPath();
              context.fillStyle = '#ffc800';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+1)), 42, 0, 2 * Math.PI);
              context.fill();
              //Redraws the chip
              context.beginPath();
              context.fillStyle = 'yellow';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+1)), 37, 0, 2 * Math.PI);
              context.fill();
              //Draws winning outline
              context.beginPath();
              context.fillStyle = '#ffc800';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+2)), 42, 0, 2 * Math.PI);
              context.fill();
              //Redraws the chip
              context.beginPath();
              context.fillStyle = 'yellow';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+2)), 37, 0, 2 * Math.PI);
              context.fill();
              //Draws winning outline
              context.beginPath();
              context.fillStyle = '#ffc800';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+3)), 42, 0, 2 * Math.PI);
              context.fill();
              //Redraws the chip
              context.beginPath();
              context.fillStyle = 'yellow';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+3)), 37, 0, 2 * Math.PI);
              context.fill();
          }
      }
    }
    //Part of right diagonal
    for(let i = 3; i < 10; i++){
      for(let j = 0; j < 7; j++){
          if(boardArray[i][j] == 2 && boardArray[i-1][j+1] == 2 && boardArray[i-2][j+2] == 2 && boardArray[i-3][j+3] == 2){
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'yellow';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-1)), (50+85*(j+1)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'yellow';
            context.style = '3px';
            context.arc((50+85*(i-1)), (50+85*(j+1)), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-2)), (50+85*(j+2)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'yellow';
            context.style = '3px';
            context.arc((50+85*(i-2)), (50+85*(j+2)), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-3)), (50+85*(j+3)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'yellow';
            context.style = '3px';
            context.arc((50+85*(i-3)), (50+85*(j+3)), 37, 0, 2 * Math.PI);
            context.fill();
          }
      }
    }
    //Part of left diagonal
    for(let i = 3; i < 10; i++){
      for(let j = 3; j < 10; j++){
          if(boardArray[i][j] == 2 && boardArray[i-1][j-1] == 2 && boardArray[i-2][j-2] == 2 && boardArray[i-3][j-3] == 2){
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'yellow';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-1)), (50+85*(j-1)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'yellow';
            context.style = '3px';
            context.arc((50+85*(i-1)), (50+85*(j-1)), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-2)), (50+85*(j-2)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'yellow';
            context.style = '3px';
            context.arc((50+85*(i-2)), (50+85*(j-2)), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-3)), (50+85*(j-3)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'yellow';
            context.style = '3px';
            context.arc((50+85*(i-3)), (50+85*(j-3)), 37, 0, 2 * Math.PI);
            context.fill();
          }
      }
    }
  }
  else if(playerThreeWinner == 1){
    //Part of check horizontal
    for(let i = 0; i < 7; i++){
      for(let j = 0; j < 10; j++){
          if(boardArray[i][j] == 3 && boardArray[i+1][j] == 3 && boardArray[i+2][j] == 3 && boardArray[i+3][j] == 3){
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'green';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i+1)), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'green';
            context.style = '3px';
            context.arc((50+85*(i+1)), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i+2)), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'green';
            context.style = '3px';
            context.arc((50+85*(i+2)), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i+3)), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'green';
            context.style = '3px';
            context.arc((50+85*(i+3)), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
          }
      }
    }
    //Part of check vertical
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 7; j++){
          if(boardArray[i][j] == 3 && boardArray[i][j+1] == 3 && boardArray[i][j+2] == 3 && boardArray[i][j+3] == 3){
              //Draws winning outline
              context.beginPath();
              context.fillStyle = '#ffc800';
              context.style = '3px';
              context.arc((50+85*i), (50+85*j), 42, 0, 2 * Math.PI);
              context.fill();
              //Redraws the chip
              context.beginPath();
              context.fillStyle = 'green';
              context.style = '3px';
              context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
              context.fill();
              //Draws winning outline
              context.beginPath();
              context.fillStyle = '#ffc800';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+1)), 42, 0, 2 * Math.PI);
              context.fill();
              //Redraws the chip
              context.beginPath();
              context.fillStyle = 'green';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+1)), 37, 0, 2 * Math.PI);
              context.fill();
              //Draws winning outline
              context.beginPath();
              context.fillStyle = '#ffc800';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+2)), 42, 0, 2 * Math.PI);
              context.fill();
              //Redraws the chip
              context.beginPath();
              context.fillStyle = 'green';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+2)), 37, 0, 2 * Math.PI);
              context.fill();
              //Draws winning outline
              context.beginPath();
              context.fillStyle = '#ffc800';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+3)), 42, 0, 2 * Math.PI);
              context.fill();
              //Redraws the chip
              context.beginPath();
              context.fillStyle = 'green';
              context.style = '3px';
              context.arc((50+85*i), (50+85*(j+3)), 37, 0, 2 * Math.PI);
              context.fill();
          }
      }
    }
    //Part of right diagonal
    for(let i = 3; i < 10; i++){
      for(let j = 0; j < 7; j++){
          if(boardArray[i][j] == 3 && boardArray[i-1][j+1] == 3 && boardArray[i-2][j+2] == 3 && boardArray[i-3][j+3] == 3){
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'green';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-1)), (50+85*(j+1)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'green';
            context.style = '3px';
            context.arc((50+85*(i-1)), (50+85*(j+1)), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-2)), (50+85*(j+2)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'green';
            context.style = '3px';
            context.arc((50+85*(i-2)), (50+85*(j+2)), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-3)), (50+85*(j+3)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'green';
            context.style = '3px';
            context.arc((50+85*(i-3)), (50+85*(j+3)), 37, 0, 2 * Math.PI);
            context.fill();
          }
      }
    }
    //Part of left diagonal
    for(let i = 3; i < 10; i++){
      for(let j = 3; j < 10; j++){
          if(boardArray[i][j] == 3 && boardArray[i-1][j-1] == 3 && boardArray[i-2][j-2] == 3 && boardArray[i-3][j-3] == 3){
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'green';
            context.style = '3px';
            context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-1)), (50+85*(j-1)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'green';
            context.style = '3px';
            context.arc((50+85*(i-1)), (50+85*(j-1)), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-2)), (50+85*(j-2)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'green';
            context.style = '3px';
            context.arc((50+85*(i-2)), (50+85*(j-2)), 37, 0, 2 * Math.PI);
            context.fill();
            //Draws winning outline
            context.beginPath();
            context.fillStyle = '#ffc800';
            context.style = '3px';
            context.arc((50+85*(i-3)), (50+85*(j-3)), 42, 0, 2 * Math.PI);
            context.fill();
            //Redraws the chip
            context.beginPath();
            context.fillStyle = 'green';
            context.style = '3px';
            context.arc((50+85*(i-3)), (50+85*(j-3)), 37, 0, 2 * Math.PI);
            context.fill();
          }
      }
    }
  }
}

function render(){
  do{
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        if(boardArray[i][j] == 0){
          context.beginPath();
          context.fillStyle = 'white';
          context.style = '3px';
          context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
          context.fill();
          context.stroke();
        }
        else if(boardArray[i][j] == 1){
          context.beginPath();
          context.fillStyle = 'red';
          context.style = '3px';
          context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
          context.fill();
          context.stroke();
        }
        else if(boardArray[i][j] == 2){
          context.beginPath();
          context.fillStyle = 'yellow';
          context.style = '3px';
          context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
          context.fill();
          context.stroke();
        }
        else if(boardArray[i][j] == 3){
          context.beginPath();
          context.fillStyle = 'green';
          context.style = '3px';
          context.arc((50+85*i), (50+85*j), 37, 0, 2 * Math.PI);
          context.fill();
          context.stroke();
        }
      }
    }
    if(playerOneWinner == 1){
      victoryRedPlayer(); //Calls red player win graphic
      chipOutlineWinner(); //Highlight the outline around the winning chips
    }
    else if(playerTwoWinner == 1){
      victoryYellowPlayer(); //Calls yellow player win graphic
      chipOutlineWinner(); //Highlight the outline around the winning chips
    }
    else if(playerThreeWinner == 1){
      victoryGreenPlayer(); //Calls yellow player win graphic
      chipOutlineWinner(); //Highlight the outline around the winning chips
    }
    else if(playerCounter == 100){
      stalemate(); //Calls tie graphic
    }
    else if(playerCounter % 3 == 0){
      //Graphic telling player one it is their turn
      context.beginPath();
      context.fillStyle = 'black';
      context.fillRect(0,945,865,155);
      context.stroke();

      context.beginPath();
      context.fillStyle = 'red';
      context.fillRect(5,950,855,145);
      context.stroke();

      context.save();
      context.font = "50pt  Calibri"
      context.fillStyle = 'black';
      context.fillText("Player One's turn!", 200, 1020);
      context.restore();
    }
    else if(playerCounter % 3 == 1){
      //Graphic telling player two it is their turn
      context.beginPath();
      context.fillStyle = 'black';
      context.fillRect(0,945,865,155);
      context.stroke();

      context.beginPath();
      context.fillStyle = 'yellow';
      context.fillRect(5,950,855,145);
      context.stroke();

      context.save();
      context.font = "50pt  Calibri"
      context.fillStyle = 'black';
      context.fillText("Player Two's turn!", 200, 1020);
      context.restore();
    }
    else if(playerCounter % 3 == 2){
      //Graphic telling player two it is their turn
      context.beginPath();
      context.fillStyle = 'black';
      context.fillRect(0,945,865,155);
      context.stroke();

      context.beginPath();
      context.fillStyle = 'green';
      context.fillRect(5,950,855,145);
      context.stroke();

      context.save();
      context.font = "50pt  Calibri"
      context.fillStyle = 'black';
      context.fillText("Player Three's turn!", 200, 1020);
      context.restore();
    }
  }while(checkWinner() == false)
}

var resetButton = document.getElementById('resetbuttonTest');
  resetButton.addEventListener("click", (e) => {
    console.clear();
    console.log("RESET");
    resetBoard();
});

//Ability to use the spacebar with an eventListener, as well as preventing the page from scrolling, found on
//StackOverflow.com @ https://stackoverflow.com/questions/22559830/html-prevent-space-bar-from-scrolling-page
document.querySelector("body").addEventListener( "keydown", e => {
  if(e.keyCode == 32 && e.target == document.body){ //32 => spacebar code
    e.preventDefault(); //Prevents the page from scrolling when the spacebar is pressed
    resetBoard();
  }
});

function splat(t) {
  context.clearRect(0,0,canvas.width,canvas.height)
  boardDesign(); //Initially draws an empty board
  render(); //boardArray is scaned, and white/red/yellow chips are added at the corresponding index of boardArray
  splatColumns(); //adds a number to the bottom of the board for user friendlyness
  window.requestAnimationFrame(splat);
}
window.requestAnimationFrame(splat);
