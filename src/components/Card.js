import React from 'react';

const Card = ({ id, value, suit, isFaceUp, playCard }) => {
  const style = isFaceUp ? {
    backgroundImage: `url(/assets/cards/${value}${suit}.svg)`
  } : {
    backgroundImage: 'url(https://wallpaperscraft.com/image/art_star_tree_sky_space_93472_300x400.jpg)'
  };

  return (
    <div
      className="card"
      style={style}
      onClick={() => playCard(id)}
    ></div>
  );
};

export default Card;
