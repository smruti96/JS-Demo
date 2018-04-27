var secretNumber = 6;
var guess = Number(prompt("Guess the number"));
if (guess===secretNumber) {
	alert("Yaaay! You guessed right!");
}
else if (guess>secretNumber) {
	alert("Too High! guess again");
}
else {
	alert("Too low. Guess again");
}