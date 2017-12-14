import React from 'react';
import ReactDOM from 'react-dom';
import Deck from './lib/Deck';

import './scss/style.scss';

class App extends React.Component {
  componentDidMount() {
    this.deck = new Deck(2, true);
    this.deck.shuffle();
    console.log(this.deck.cards);
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
