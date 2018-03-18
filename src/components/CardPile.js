import React from 'react';
import Card from './Card';

const CardPile = ({ deck, isFaceUp, onClick }) => {
  return (
    <div className="deck" onClick={onClick}>
      {deck.map(card =>
        <Card key={card.id} {...card} isFaceUp={isFaceUp} />
      )}
    </div>
  );
};

export default CardPile;
