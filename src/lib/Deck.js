import shortid from 'shortid';

class Deck {
  suits = ['♠️', '♥️', '♣️', '♦️'];
  values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  cards = [];

  constructor(numberOfPacks=1, jokersIncluded=false) {
    while(numberOfPacks--) {
      this.suits.forEach(suit => {
        this.values.forEach(value => this.cards.push({ id: shortid.generate(), suit, value }));
      });

      if(jokersIncluded) {
        this.cards.push({ id: shortid.generate(), value: 'joker' }, { id: shortid.generate(), value: 'joker' });
      }
    }
  }

  shuffle = (times=10) => {
    let temp = null;

    while(times--) {
      for (let i = this.cards.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
      }
    }
  }

  getCard = () => this.cards.pop();
}

export default Deck;
