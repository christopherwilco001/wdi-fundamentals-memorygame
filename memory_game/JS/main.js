console.log("Up and running!");
var cards = ["queen", "king" , "queen", "king"];
var cardsInPlay = [0, 1, 2, 3];
var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match");
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert(" Sorry try again");
}
}
var flipCard = function()	{
console.log("User flipped" + cards[1]);
cardsInPlay.push(cards[1]);
}