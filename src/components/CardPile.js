import React from 'react';
import Card from './Card';

const CardPile = ({ deck, isFaceUp }) => {
  return (
    <div className="deck">
      {deck.map(card =>
        <Card key={card.id} {...card} isFaceUp={isFaceUp} />
      )}
    </div>
  );
};

export default CardPile;
