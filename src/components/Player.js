import React from 'react';

const Player = ({ name, hand }) => {
  console.log(hand);
  return (
    <div className="player">
      <h2>{name}</h2>
      <div className="face-down">
        {hand.faceDown.map(card =>
          <div className="card" key={card.id}></div>
        )}
      </div>
      <div className="face-up">
        {hand.faceUp.map(card =>
          <div className="card" key={card.id}>
            {`${card.suit} ${card.value}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Player;
