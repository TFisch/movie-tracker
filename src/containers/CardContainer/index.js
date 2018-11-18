import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../containers/Card';
import './style.css';

export class CardContainer extends Component {
  state = { userFavorites: [] };

  setFavorites = () => {
    const user = JSON.parse(localStorage.userObject);
    const { userFavorites } = user;
    this.setState({ userFavorites });
  };

  render() {
    const displayMovies = this.props.movies.map(movie => (
      <Card
        key={Date.now() * Math.random()}
        movie={movie}
        setFavorites={this.setFavorites}
      />
    ));

    return <div className="card-container">{displayMovies}</div>;
  }
}
export const mapStateToProps = state => ({
  movies: state.moviesData,
  userFavorites: state.userFavorites,
  userData: state.userData
});

CardContainer.propTypes = {
  movies: PropTypes.array
};

export default connect(mapStateToProps)(CardContainer);
