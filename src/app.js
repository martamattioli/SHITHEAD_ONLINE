import React from 'react';
import ReactDOM from 'react-dom';
import Deck from './lib/Deck';
import Player from './components/Player';
import CardPile from './components/CardPile';

import './scss/style.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      burn: [],
      deck: [],
      players: [],
      turnIndex: 0
    };
  }

  dealCard = (card, player) => {
    if(player.hand.faceDown.length < 3) player.hand.faceDown = player.hand.faceDown.concat(card);
    else if(player.hand.faceUp.length < 3) player.hand.faceUp = player.hand.faceUp.concat(card);
    else player.hand.inHand = player.hand.inHand.concat(card);

    return player;
  }

  createPlayer = (name) => {
    return {
      name,
      hand: {
        faceDown: [],
        faceUp: [],
        inHand: []
      }
    };
  }

  startGame = () => {
    // deal cards to players in tern, 9 cards each
    let turn = 9;
    while(turn--) {
      const { players } = this.state;
      const player1 = this.dealCard(this.deck.getCard(), players[0]);
      const player2 = this.dealCard(this.deck.getCard(), players[1]);
      this.setState({ players: [player1, player2], deck: this.deck.getAllCards() });
    }
  }

  componentDidMount() {
    this.deck = new Deck(1);
    this.deck.shuffle();
    // create player 1
    const player1 = this.createPlayer('Marta');
    const player2 = this.createPlayer('Rane');

    this.setState({ players: [player1, player2] }, this.startGame);
  }

  playCard = (id) => {
    const playerIndex = this.state.turnIndex % this.state.players.length;
    const currentPlayer = this.state.players[playerIndex];
    const turnIndex = this.state.turnIndex + 1;
    const card = currentPlayer.hand.inHand.find(card => card.id === id);
    if(!card) return false;

    // removed card that was clicked on
    const newCard = this.deck.getCard();
    const inHand = newCard ? currentPlayer.hand.inHand.map(card => {
      if(card.id === id) return newCard;
      return card;
    }) : currentPlayer.hand.inHand.filter(card => {
      return card.id !== id;
    });

    const hand = Object.assign({}, currentPlayer.hand, { inHand });
    const updatedPlayer = Object.assign({}, currentPlayer, { hand });

    const players = this.state.players.map((player, i) => {
      if(playerIndex === i) return updatedPlayer;
      return player;
    });

    const burn = this.state.burn.concat(card);
    this.setState({ players, burn, turnIndex, deck: this.deck.getAllCards() });
  }

  render() {
    return (
      <main>
        <h1>Shithead Online</h1>
        {this.state.players.map(player =>
          <Player key={player.name} {...player} playCard={this.playCard} />
        )}

        <div className="decks">
          <CardPile deck={this.state.deck} />
          <CardPile deck={this.state.burn} />
        </div>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
