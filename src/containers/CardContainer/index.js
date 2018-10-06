import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../containers/Card';
import './style.css';
import { setFavoritesToLocal } from '../../api/apiCalls';

export const CardContainer = (props) => {
  if (props.userFavorites.length > 0) {
    setFavoritesToLocal(props.userFavorites, props.userData.name);
  }
  const displayMovies = props.movies.map(movie => (
    <Card
      key={Date.now() * Math.random()}
      movie={movie}
    />)
  );

  return (
    <div className="card-container">
      {displayMovies}
    </div>
  );
};

export const mapStateToProps = (state) => ({
  movies: state.moviesData,
  userFavorites: state.userFavorites,
  userData: state.userData,

});

CardContainer.propTypes = {
  movies: PropTypes.array
};

export default connect(mapStateToProps)(CardContainer);
