import React from 'react';

const Player = ({ name, hand }) => {
  console.log(hand);
  return (
    <div className="player">
      <h2>{name}</h2>
      <div className="hand">
        <div className="face-down">
          {hand.faceDown.map(card =>
            <div className="card" key={card.id}></div>
          )}
        </div>
        <div className="face-up">
          {hand.faceUp.map(card =>
            <div className="card" key={card.id}>
              <span>{card.suit}</span>
              <span>{card.value}</span>
            </div>
          )}
        </div>
        <div className="in-hand">
          {hand.inHand.map(card =>
            <div className="card" key={card.id}>
              <span>{card.suit}</span>
              <span>{card.value}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
