console.log("Up and running!");
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
},
];


var cardsInPlay = []; {
	cardsInPlay.push("queen");
	console.log("User flipped" + cards[0].rank);
	console.log("images/queen-of-hearts.png");
	console.log("hearts")
}
var cardsInPlay = []; {
	cardsInPlay.push("king");
	console.log("User flipped" + cards[2].rank);
	console.log("images/king-of-hearts.png");
	console.log("hearts")
}
var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("You found a match");
} else if (cardsInPlay[0] !== cardsInPlay[2]) {
	alert(" Sorry try again");
	}
};
var flipCard = function()	{
console.log("User flipped" + cards[0].rank);
}