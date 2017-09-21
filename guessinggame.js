/* Guessing Game by Mr. M */
/* Initialize Variables */
var totalTurns = 0; // dosen't reset on loop
var turns = 0; // reset on loop
var games = 0;
var average = 0;
var playAgain = 'y';

//alert("totalTurns= "+totalTurns+" games= "+games+" average= "+average+" playAgain= "+playAgain);
do{
	turns = 0;
	var Answer = Math.floor(Math.random() * (99) + 1 );
	games++;
	alert(Answer);
	do {
		do {
			guess= prompt("Please enter a guess from number 1 through 100.");
			if (isNaN(guess)){
				playAgain= prompt("would you like keep playing? y=Yes");
				if(playAgain !== 'y'){
					break;
				}
			}
		}
		while (isNaN(guess)==false);
		turns++;
		totalTurns++;
		if (guess < Answer){//guess is lower than Answer
			alert("Too low!")
		} else if (guess > Answer){//guess is higher than Answer
			alert("Too high!")
		}
	}
	while (guess != Answer);
	alert("Congratulations! You finished in "+turns+" turns.");
	average = totalTurns / games;
	if (games != 1){
		alert("You played "+games+" games with "+totalTurns+" turns at about "+average+" turns per game.");
	} //otherwise, it's the first game!

	playAgain= prompt("would you like to play again? y=Yes");
}
while (playAgain == 'y');
/* End Playing */