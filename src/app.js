import React from 'react';
import ReactDOM from 'react-dom';
import Deck from './lib/Deck';
import Player from './lib/Player';

import './scss/style.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pile: []
    };
  }

  componentDidMount() {
    this.deck = new Deck(2, true);
    this.deck.shuffle();
    console.log(this.deck.cards);
    this.player = new Player('MilkySmooth');
    console.log(`${this.player.name} joined...`);
    this.player.hand = this.deck.dealCard(this.player, this.deck.cards);
    console.log('Milkys first hand', this.player.hand);
  }

  render() {
    return (
      <main>
        <h1>Shithead Online</h1>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
