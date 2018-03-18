import React from 'react';
import Card from './Card';

const Player = ({ name, hand, selectCard, playCard, isCurrentPlayer, playerIndex }) => {
  return (
    <div className={`player player-${playerIndex}${isCurrentPlayer ? ' is-current' : ''}`}>
      <h2>{name}</h2>
      <div className="hand">
        <div className="face-down">
          {hand.faceDown.map(card =>
            <Card key={card.id} {...card} selectCard={selectCard} canPlayCard={isCurrentPlayer && hand.faceUp.length===0} />
          )}
        </div>
        <div className="face-up">
          {hand.faceUp.map(card =>
            <Card key={card.id} {...card} isFaceUp={true} selectCard={selectCard} canPlayCard={isCurrentPlayer && hand.inHand.length===0}/>
          )}
        </div>
        <div className="in-hand">
          {hand.inHand.map(card =>
            <Card key={card.id} {...card} isFaceUp={true} selectCard={selectCard} canPlayCard={isCurrentPlayer} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
