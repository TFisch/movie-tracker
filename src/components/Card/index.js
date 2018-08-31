import React from 'react';
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux';
import { addFavorite } from '../../actions';
import { postFavorites } from '../../api/apiCalls';
import './style.css';

export const Card = (props) => {
  const { movie, user, addFavorite } = props;
  const { poster_path, vote_average } = movie;
  const rating = vote_average / 2;

  const handleFavorite = () => {
    const favoriteData = { ...movie, user_id: user.id };
    const favoriteMovieId = favoriteData.movie_id;
    const checkFavorites = props.favorites.find(favorite => favorite.movie_id === favoriteMovieId);
    if (props.user.id) {
      if (checkFavorites) {
        return;
      } else {
        addFavorite(favoriteData);
        postFavorites(favoriteData);
      }
    }
  };

  return (
    <div className='card'>
      <div className='favorite-wrapper'>
        <button
          className='favorite'
          onClick={() => handleFavorite()}>
        </button>
        <StarRatings
          starDimension={'1em'}
          rating={rating}
          numberOfStars={5}
          starRatedColor={'gold'}
        />
      </div>
      <img className='poster-image' src={poster_path} alt='movie data' />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userData,
  favorites: state.userFavorites
});

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (movie) => dispatch(addFavorite(movie)),
  postFavorites: (movie) => dispatch(postFavorites(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
