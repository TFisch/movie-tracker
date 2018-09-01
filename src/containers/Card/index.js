import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { addFavorite, removeFavorite } from '../../actions';
import { postFavorites, deleteFavorite } from '../../api/apiCalls';
import classNames from 'classnames/bind';
import './style.css';

export const Card = (props) => {
  const { movie, user, addFavorite } = props;
  const { poster_path, vote_average } = movie;
  const rating = vote_average / 2;

  const buttonClass = classNames(
    { 
      favoriteBtn: true, 
      favorited: props.favorites.find(movie => (movie.movie_id === props.movie.movie_id)) 
    }
  );

  const handleFavorite = () => {
    const favoriteData = { ...movie, user_id: user.id };
    const favoriteMovieId = favoriteData.movie_id;
    const userId = user.id;
    const favoriteExists = props.favorites.find(favorite => favorite.movie_id === favoriteMovieId);
    if (props.user.id) {
      if (favoriteExists) {
        removeFavorite(favoriteMovieId);
        deleteFavorite(userId, favoriteMovieId);
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
    <div className='card'>
      <div className='favorite-wrapper'>
        <Route exact path='/' component={noUserFavoriteButton}></Route>
        <Route path='/user' component={userFavoriteButton}></Route>
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
  postFavorites: (movie) => dispatch(postFavorites(movie)),
  removeFavorite: (user, movie) => dispatch(removeFavorite(user, movie))
});

Card.propTypes = {
  user: PropTypes.object,
  movie: PropTypes.object,
  favorites: PropTypes.array,
  addFavorite: PropTypes.func,
  postFavorites: PropTypes.func,
  removeFavorite: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
