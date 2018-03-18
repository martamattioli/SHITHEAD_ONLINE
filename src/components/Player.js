import React from 'react';
import Card from './Card';

const Player = ({ name, hand, playCard, isCurrentPlayer }) => {
  return (
    <div className={`player${isCurrentPlayer ? ' is-current' : ''}`}>
      <h2>{name}</h2>
      <div className="hand">
        <div className="face-down">
          {hand.faceDown.map(card =>
            <Card key={card.id} {...card} playCard={playCard} canPlayCard={hand.faceUp.length===0} />
          )}
        </div>
        <div className="face-up">
          {hand.faceUp.map(card =>
            <Card key={card.id} {...card} isFaceUp={true} playCard={playCard} canPlayCard={hand.inHand.length===0}/>
          )}
        </div>
        <div className="in-hand">
          {hand.inHand.map(card =>
            <Card key={card.id} {...card} isFaceUp={true} playCard={playCard} canPlayCard={true} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
