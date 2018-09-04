import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import {
  addFavorite,
  removeFavorite,
  manageSelectedMovie
} from '../../actions';
import { postFavorites, deleteFavorite } from '../../api/apiCalls';
import classNames from 'classnames/bind';
import './style.css';

export const Card = (props) => {
  const {
    movie,
    user,
    favorites,
    removeFavorite,
    addFavorite,
    manageSelectedMovie
  } = props;
  const { poster_path, vote_average, movie_id } = movie;
  const rating = vote_average / 2;

  const buttonClass = classNames(
    { 
      favoriteBtn: true, 
      favorited: props.favorites.find(movie => (movie.movie_id === props.movie.movie_id)) 
    }
  );

  const handleFavorite = () => {
    const { user_id } = user;
    const favoriteData = { ...movie, user_id };
    const existingMovieId = movie_id;
    const favoriteExists = favorites.find(favorite => favorite.movie_id === existingMovieId);
    if (user_id) {
      if (favoriteExists) {
        removeFavorite(movie);
        deleteFavorite(user_id, existingMovieId);
      } else {
        addFavorite(favoriteData);
        postFavorites(favoriteData);
      }
    }
  };

  const noUserFavoriteButton = () => (
    <Link to='/login'>
      <button className={buttonClass}>
      </button>
    </Link>
  );

  const userFavoriteButton = () => (
    <button className={buttonClass} onClick={() => handleFavorite()}>
    </button>
  );

  return (
    <div className='card' onClick={() => manageSelectedMovie(movie)}>
      <div className='favorite-wrapper'>
        <Route exact path='/' component={noUserFavoriteButton}></Route>
        <Route path='/:user' component={userFavoriteButton}></Route>
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

export const mapStateToProps = (state) => ({
  user: state.userData,
  favorites: state.userFavorites
});

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (movie) => dispatch(addFavorite(movie)),
  removeFavorite: (movie) => dispatch(removeFavorite(movie)),
  manageSelectedMovie: (movie) => dispatch(manageSelectedMovie(movie))
});

Card.propTypes = {
  user: PropTypes.object,
  movie: PropTypes.object,
  favorites: PropTypes.array,
  addFavorite: PropTypes.func,
  postFavorites: PropTypes.func,
  removeFavorite: PropTypes.func,
  manageSelectedMovie: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
