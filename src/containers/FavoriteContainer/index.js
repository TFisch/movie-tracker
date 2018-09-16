import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../containers/Card';
import './style.css';

export const FavoriteContainer = (props) => {
  const displayFavorites = props.userFavorites.map(movie => (
    <Card
      key={Date.now() * Math.random()}
      movie={movie}
    />)
  );

  return (
    <div className="card-container">
      {displayFavorites}
    </div>
  );
};

export const mapStateToProps = (state) => ({
  userFavorites: state.userFavorites
});

FavoriteContainer.propTypes = {
  userFavorites: PropTypes.array
};

export default connect(mapStateToProps)(FavoriteContainer);