import React from 'react';

const Card = (props) => {
  console.log('inside card', props);
  const style = props.isFaceUp ? {
    backgroundImage: `url(/assets/cards/${props.value}${props.suit}.svg)`
  } : {
    backgroundImage: 'url(https://wallpaperscraft.com/image/art_star_tree_sky_space_93472_300x400.jpg)'
  };

  return (
    <div
      className="card"
      style={style}
    ></div>
  );
};

export default Card;
