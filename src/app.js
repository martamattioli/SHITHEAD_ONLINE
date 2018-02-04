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
    this.deck = new Deck(2, true);
    this.deck.shuffle();
    // create player 1
    const player1 = this.createPlayer('Marta');
    const player2 = this.createPlayer('Rane');

    this.setState({ players: [player1, player2] }, this.startGame);
  }

  render() {
    return (
      <main>
        <h1>Shithead Online</h1>
        {this.state.players.map(player =>
          <Player key={player.name} {...player} />
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
