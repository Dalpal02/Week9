

class Card {

    constructor(face,suit,rank) {
        this.face = face;
        this.suit = suit;
        this.rank = rank;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.hand = [];
    }
}

class Game {
    constructor() {
        this.deck = [];
        this.player1 = new Player(`Player1`);
        this.player2 = new Player(`Player2`);
        this.makeDeck();
    
    }


    makeDeck() {

        let values = [2,3,4,5,6,7,8,9,10,`J`,`Q`,`K`,`A`]
        let suits = [`Diamond`,`Spades`,`Hearts`,`Clubs`]
        
        for (let x = 0; x < values.length; x++) {
            for (let suit of suits) {
                //Make a new Card and then put that card into the deck.
                this.deck.push(new Card(values[x],suit,x+2))
            }
        }
        
        for (let i = this.deck.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }        

        this.player1.hand = this.deck.splice(0,26)
        this.player2.hand = this.deck.splice(0,26)


    }

    round() {
        for (let x = 0; x < 26; x++) {
            let p1Card = this.player1.hand[x];
            let p2Card = this.player2.hand[x];
            console.log(`Player 1 played a ${p1Card.face} of ${p1Card.suit} against Player 2's ${p2Card.face} of ${p2Card.suit}.`);

            if (p1Card.rank > p2Card.rank) {
                this.player1.points++;
                console.log(`Player 1 wins this round!`);
            } else if (p1Card.rank < p2Card.rank) {
                this.player2.points++;
                console.log(`Player 2 wins this round!`);
            } else {
                console.log(`This round is a tie!`);
            }
        }
        this.declareWinner();
    }
// next steps would be to tally points each round and then at the end of the game compare points and declare a winner.

    declareWinner() {
        console.log(`Final Points:`);
        console.log(`${this.player1.name}: ${this.player1.points}`);
        console.log(`${this.player2.name}: ${this.player2.points}`);

        if (this.player1.points > this.player2.points) {
            console.log(`${this.player1.name} wins the game!`);
        } else if (this.player1.points < this.player2.points) {
            console.log(`${this.player2.name} wins the game!`);
        } else {
            console.log(`The game is a tie!`);
        }
    }
}

let game = new Game();
game.round();



