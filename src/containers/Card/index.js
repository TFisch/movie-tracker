import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import {
  addFavorite,
  removeFavorite,
  manageSelectedMovie
} from '../../actions';
import {
  postFavorites,
  deleteFavorite,
  saveFavoriteLocally,
  deleteFavoriteLocally
} from '../../api/apiCalls';
import classNames from 'classnames/bind';
import './style.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      userFavorties: []
    };
  }

  handleFavorite = () => {
    const { movie, user } = this.props;
    const { movie_id } = movie;

    const userObject = JSON.parse(localStorage.userObject);
    const { userFavorites } = userObject;
    const { user_id } = user;
    const favoriteData = { ...movie, user_id };
    const existingMovieId = movie_id;
    const favoriteExists = userFavorites.find(
      favorite => favorite.movie_id === existingMovieId
    );
    if (userObject) {
      if (favoriteExists) {
        deleteFavoriteLocally(movie);
        // removeFavorite(movie);
        // deleteFavorite(user_id, existingMovieId);
      } else {
        saveFavoriteLocally(favoriteData);
        // addFavorite(favoriteData);
        // postFavorites(favoriteData);
      }
    }
    this.setState({ userFavorites: favoriteExists });
  };

  render() {
    if (localStorage.userObject) {
      var buttonClass = classNames({
        favoriteBtn: true,
        favorited: JSON.parse(localStorage.userObject).userFavorites.find(
          movie => movie.movie_id === this.props.movie.movie_id
        )
      });
    } else {
      buttonClass = classNames({
        favoriteBtn: true
      });
    }

    const { movie, manageSelectedMovie } = this.props;

    const { poster_path, vote_average } = movie;
    const rating = vote_average / 2;

    return (
      <div className="card">
        <div className="favorite-wrapper">
          <button className={buttonClass} onClick={this.handleFavorite} />
          <StarRatings
            starDimension={'1em'}
            rating={rating}
            numberOfStars={5}
            starRatedColor={'gold'}
          />
        </div>
        <img
          className="poster-image"
          src={poster_path}
          alt="movie data"
          onClick={() => manageSelectedMovie(movie)}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.userData,
  favorites: state.userFavorites
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: movie => dispatch(addFavorite(movie)),
  removeFavorite: movie => dispatch(removeFavorite(movie)),
  manageSelectedMovie: movie => dispatch(manageSelectedMovie(movie))
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
