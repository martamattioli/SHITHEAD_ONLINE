import React from 'react';
import Card from './Card';

const CardPile = ({ deck }) => {
  return (
    <div className="deck">
      {deck.map(card =>
        <Card key={card.id} {...card} />
      )}
    </div>
  );
};

export default CardPile;
