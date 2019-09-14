console.log("Up and running!");
let cards = [
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
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-diamonds.png"
}
];
let cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

};
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
checkForMatch();

};
flipCard(0);
flipCard(2);