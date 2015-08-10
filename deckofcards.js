


var cards = []



function Card (value,suit,face) {
	this.value = value;
	this.suit = suit;
	this.face = face;

};

function Deck () {
	var suit = ['club','spade','heart','diamond'];
	var face = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
	var cards = []
	for(var i=0;i<52;i++) {
		for(var j=0;j<suit.length;j++) {
			for(var k=0;k<face.length;k++) {
				cards.push (new card(i+1,suit[j],face[k]));


			}
		}
	}
	return cards;

};

console.log(Deck());




