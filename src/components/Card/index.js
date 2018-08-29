import React from 'react';
import './style.css';

export const Card = ({ title, poster_path }) => {

  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`}/>
    </div>
  );
};

export default Card;
