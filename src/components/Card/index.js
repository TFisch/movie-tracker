import React from 'react';
import './style.css';
import StarRatings from 'react-star-ratings';
import { postFavorites } from '../../api/apiCalls';

export const Card = ({ movie }) => {
  const { poster_path, vote_average } = movie
  const rating = vote_average / 2;
  return (
    <div className='card'>
      <div className='favorite-wrapper'>
        <button className='favorite'></button>
        <StarRatings className='star' starDimension={'1em'} rating={rating} numberOfStars={5} starRatedColor={'gold'} />
      </div>
      <img className='poster-image' src={poster_path} alt='movie data' />
    </div>
  );
};
