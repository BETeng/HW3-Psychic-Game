// JAVASCRIPT FOR PSYCHIC GAME //

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessed = [];
var LetterChoices = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x","y", "z"];
var playerGuess = ""
var randomLetter = LetterChoices[Math.floor(Math.random()*LetterChoices.length)];
console.log("computer random letter: ",randomLetter);

 document.onkeypress = function(event){
  playerGuess = event.key.toLowerCase();
  console.log("prev. inputs: ", guessed);
  console.log("YOU guessed: ",playerGuess);

if(guessed.includes(playerGuess)){
  console.log("you already chose this");

}
else if(playerGuess == randomLetter){
  alert("You WON");

}else if(playerGuess != randomLetter && guessesLeft > 0){
  guessesLeft--;
  console.log("# of guesses: ",guessesLeft);
  console.log("keep trying");
  guessed.push(playerGuess);
}else{
  console.log("You LOSE!");
  
}
var scoreTracker = document.getElementById("scoreboard");
scoreTracker.textContent = "You guessed: "+playerGuess;
var scoreCounter = document.getElementById("counter");
 scoreCounter.textContent = "You have: "+guessesLeft+" guesses remaining";
 var pastGuess = document.getElementById("pastGuesses");
 pastGuess.textContent = "You guessed: " +guessed;
}





