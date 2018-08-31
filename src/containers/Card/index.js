import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { addFavorite } from '../../actions';
import { postFavorites } from '../../api/apiCalls';
import './style.css';

export const Card = (props) => {
  const { movie, user, addFavorite } = props;
  const { poster_path, vote_average } = movie;
  const rating = vote_average / 2;

  const handleFavorite = () => {
    const favoriteData = {...movie, user_id: user.id};
    addFavorite(favoriteData);
    postFavorites(favoriteData);
  };

  const noUserFavoriteButton = () => (
    <Link to='/login'>
      <button className='favorite'>
      </button>
    </Link>
  );

  const userFavoriteButton = () => (
    <button className='favorite' onClick={() => handleFavorite()}>
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
  user: state.userData
});

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (movie) => dispatch(addFavorite(movie)),
  postFavorites: (movie) => dispatch(postFavorites(movie))
});

Card.propTypes = {
  movie: PropTypes.object,
  user: PropTypes.object,
  addFavorite: PropTypes.func,
  postFavorites: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
