import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

class App extends React.Component {
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
