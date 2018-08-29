import React from 'react';
import './style.css';
import StarRatings from 'react-star-ratings';

export const Card = ({ title, poster_path, vote_average }) => {
  const rating = vote_average / 2;
  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
      <StarRatings starDimension={'1em'} rating={rating} numberOfStars={5} starRatedColor={'gold'} />
    </div>
  );
};

export default Card;
