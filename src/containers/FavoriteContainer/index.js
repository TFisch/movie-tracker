import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../containers/Card';
import './style.css';

export class FavoriteContainer extends Component {
  state = {
    userFavorites: []
  };

  componentDidMount = () => {
    this.setFavorites();
  };

  setFavorites = () => {
    const user = JSON.parse(localStorage.userObject);
    const { userFavorites } = user;
    this.setState({ userFavorites });
  };

  render() {
    const user = JSON.parse(localStorage.userObject);
    const { userFavorites } = user;
    const displayFavorites = userFavorites.map(movie => (
      <Card
        key={Date.now() * Math.random()}
        movie={movie}
        setFavorites={this.setFavorites}
      />
    ));

    return <div className="card-container">{displayFavorites}</div>;
  }
}
export const mapStateToProps = state => ({
  userFavorites: state.userFavorites
});

FavoriteContainer.propTypes = {
  userFavorites: PropTypes.array
};

export default connect(mapStateToProps)(FavoriteContainer);
