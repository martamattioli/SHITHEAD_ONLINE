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

  createPlayer = name => {
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
    this.deck = new Deck(2, true);
    this.deck.shuffle();
    // create player 1
    const player1 = this.createPlayer('Marta');
    const player2 = this.createPlayer('Rane');

    this.setState({ players: [player1, player2] }, this.startGame);
  }

  findHand = currentPlayer => Object.keys(currentPlayer.hand).reduce((currentHand, key) => {
    return currentPlayer.hand[key].length ? key : currentHand;
  });

  isHigherCard = card => {
    const topCard = this.state.burn[this.state.burn.length-1] || { value: 2 };
    return this.deck.values.indexOf(topCard.value) <= this.deck.values.indexOf(card.value);
  }

  getCurrentPlayer = () => {
    const playerIndex = this.state.turnIndex % this.state.players.length;
    return this.state.players[playerIndex];
  }

  updatePlayerHand = newHand => {
    const playerIndex = this.state.turnIndex % this.state.players.length;
    const currentPlayer = this.getCurrentPlayer();
    const currentHand = this.findHand(currentPlayer);
    const hand = Object.assign({}, currentPlayer.hand, { [currentHand]: newHand });
    const updatedPlayer = Object.assign({}, currentPlayer, { hand });
    return this.state.players.map((player, i) => {
      if(playerIndex === i) return updatedPlayer;
      return player;
    });
  }

  pickUpBurn = () => {
    if(!this.state.burn.length) return false;
    const turnIndex = this.state.turnIndex + 1;
    const currentPlayer = this.getCurrentPlayer();
    const newHand = currentPlayer.hand.inHand.concat(this.state.burn);
    const players = this.updatePlayerHand(newHand);

    this.setState({ players, burn: [], turnIndex });
  }

  playCard = id => {
    const turnIndex = this.state.turnIndex + 1;
    const currentPlayer = this.getCurrentPlayer();
    const currentHand = this.findHand(currentPlayer);
    const card = currentPlayer.hand[currentHand].find(card => card.id === id);
    if(!card || !this.isHigherCard(card)) return false;

    // removed card that was clicked on
    const newCard = currentPlayer.hand[currentHand].length === 3 && this.deck.getCard();
    const newHand = newCard ? currentPlayer.hand[currentHand].map(card => {
      if(card.id === id) return newCard;
      return card;
    }) : currentPlayer.hand[currentHand].filter(card => {
      return card.id !== id;
    });

    const players = this.updatePlayerHand(newHand);

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
          <CardPile deck={this.state.burn} isFaceUp={true} pickUpBurn={this.pickUpBurn} />
        </div>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
