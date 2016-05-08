var kingdomName = " ";
var grainPerClick = 1;
var grain = 0;
var grainYieldLevel = 1;

function startGame() {
  var gameStartPrompt = prompt("Welcome! Please Choose a Name For Your Kingdom to Begin!");
  kingdomName = gameStartPrompt;
  document.getElementById("kingdomName").innerHTML = kingdomName;
  document.getElementById("startButton").className += "hidden";
  document.getElementById("background").className = "gameBackground";
  document.getElementById("grainStore").className = " ";
  document.getElementById("grainButton").className = " ";
  
}
function getGrain() {
  grain += grainYieldLevel;
  document.getElementById("grainNumber").innerHTML = grain;
}
if(grain >= 50){
  alert("Your modest town begins attracting wanderers who offer you advice and farming tools for a price.  This could increase our wheat production!");
  document.getElementById("grainYieldUpgrade").className = " ";
  document.getElementById("yieldLevel").className = " ";
}
