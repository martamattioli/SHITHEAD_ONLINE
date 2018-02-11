import React from 'react';
import Card from './Card';

const Player = ({ name, hand, playCard }) => {
  return (
    <div className="player">
      <h2>{name}</h2>
      <div className="hand">
        <div className="face-down">
          {hand.faceDown.map(card =>
            <Card key={card.id} {...card} />
          )}
        </div>
        <div className="face-up">
          {hand.faceUp.map(card =>
            <Card key={card.id} {...card} isFaceUp={true} />
          )}
        </div>
        <div className="in-hand">
          {hand.inHand.map(card =>
            <Card key={card.id} {...card} isFaceUp={true} playCard={playCard} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
