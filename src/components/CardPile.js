import React from 'react';
import Card from './Card';

const CardPile = ({ deck, isFaceUp, pickUpBurn }) => {
  return (
    <div className="deck" onClick={pickUpBurn}>
      {deck.map(card =>
        <Card key={card.id} {...card} isFaceUp={isFaceUp} />
      )}
    </div>
  );
};

export default CardPile;
