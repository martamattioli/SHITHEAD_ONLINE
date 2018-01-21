import React from 'react';

const Player = ({ name, hand }) => {
  console.log(hand);
  return (
    <div className="player">
      <h2>{name}</h2>
      <div className="hand">
        <div className="face-down">
          {hand.faceDown.map(card =>
            <div
              className="card" key={card.id}
            ></div>
          )}
        </div>
        <div className="face-up">
          {hand.faceUp.map(card =>
            <div
              className="card" key={card.id}
              style={{ backgroundImage: `url(/assets/cards/${card.value}${card.suit}.svg)`}}
            ></div>
          )}
        </div>
        <div className="in-hand">
          {hand.inHand.map(card =>
            <div
              className="card" key={card.id}
              style={{ backgroundImage: `url(/assets/cards/${card.value}${card.suit}.svg)`}}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
