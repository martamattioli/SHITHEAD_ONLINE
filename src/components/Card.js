import React from 'react';

const Card = ({ id, value, suit, isFaceUp, playCard, canPlayCard }) => {
  const style = isFaceUp ? {
    backgroundImage: `url(/assets/cards/${value}${suit}.svg)`
  } : {
    backgroundImage: 'url(https://wallpaperscraft.com/image/art_star_tree_sky_space_93472_300x400.jpg)'
  };

  console.log(canPlayCard, value, suit);

  return (
    <div
      className="card"
      style={style}
      onClick={() => canPlayCard && playCard(id)}
    ></div>
  );
};

export default Card;
