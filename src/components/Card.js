import React from 'react';

const Card = ({ id, value, suit, isFaceUp, selectCard, canPlayCard, selected }) => {
  const style = isFaceUp ? {
    backgroundImage: `url(/assets/cards/${value}${suit}.svg)`
  } : {
    backgroundImage: 'url(https://wallpaperscraft.com/image/art_star_tree_sky_space_93472_300x400.jpg)'
  };

  return (
    <div
      className={`card${selected ? ' is-selected' : ''}`}
      style={style}
      onClick={() => canPlayCard && selectCard(id)}
    />
  );
};

export default Card;
