// JAVASCRIPT FOR PSYCHIC GAME //

var wins = 0;
var losses = 0;
var guessesLeft = 9;
//var playerGuess
var guessed = ["a","b","c"];

var LetterChoices = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x","y", "z"];
var playerGuess = ""
// var scoreTracker = document.getElementById("scoreboard");
// scoreTracker.textContent = "hello";
var randomLetter = LetterChoices[Math.floor(Math.random()*LetterChoices.length)];
console.log("computer random letter: ",randomLetter);

 document.onkeypress = function(event){
  playerGuess = event.key.toLowerCase();
  
  console.log("YOU guessed: ",playerGuess);
 
  console.log("# of guesses: ",guessesLeft);
 
if(playerGuess == randomLetter){
  console.log("You WON");
}else if(guessed.includes(playerGuess)){
  console.log("you already chose this");
}else if(playerGuess != randomLetter && guessesLeft > 0){
   guessesLeft--;
  console.log("keep trying");
}else{
  console.log("You LOSE!");

  
}

}




//all different keys are put into an array

 
//run thru array and check for match


