import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { resetTheStore } from '../../actions';
import './style.css';

export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      activeUser: false,
      toggleListingsButton: false,
      toggleFavoritesButton: false,
      triggerLogin: null,
      activeName: ''
    };
  }

  componentDidMount = () => {
    this.checkUserStatus();
  };

  checkUserStatus = () => {
    if (localStorage.userObject) {
      const nameFromStorage = JSON.parse(localStorage.userObject);
      const name = nameFromStorage.name;
      this.setState({
        activeUser: true,
        activeName: name,
        toggleFavoritesButton: true
      });
    }
  };

  handleFavoriteRedirect = () => {
    this.setState({ toggleFavoritesButton: true, toggleListingsButton: false });
  };

  handleListingsRedirect = () => {
    this.setState({ toggleFavoritesButton: false, toggleListingsButton: true });
  };

  handleLogout = () => {
    resetTheStore();
    localStorage.clear();
    this.setState({
      toggleFavoritesButton: false,
      toggleListingsButton: false,
      activeUser: false
    });
  };

  render() {
    const userWelcome = this.state.activeName || '';
    const { activeLogin } = this.props;
    const {
      activeUser,
      toggleFavoritesButton,
      toggleListingsButton
    } = this.state;
    return (
      <div>
        {!localStorage.userObject && (
          <div className="button-wrap">
            <Link to="/login">
              <button className="login">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup">SignUp</button>
            </Link>
          </div>
        )}
        {localStorage.userObject && (
          <div>
            <h1 className="welcome-text">{`Welcome! ${userWelcome}`}</h1>
            {toggleFavoritesButton === true && (
              <Link to={`/favorites`}>
                <button
                  className="favorites-button"
                  onClick={this.handleListingsRedirect}
                >
                  Favorites
                </button>
              </Link>
            )}
            {toggleListingsButton === true && (
              <Link to={`/user`}>
                <button
                  className="favorites-button"
                  onClick={this.handleFavoriteRedirect}
                >
                  Movies
                </button>
              </Link>
            )}
            <Link to="/login">
              <button onClick={this.handleLogout} className="logout-button">
                Logout
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.userData,
  activeLogin: state.activeLogin
});

export const mapDispatchToProps = dispatch => ({
  resetTheStore: () => dispatch(resetTheStore())
});

NavBar.propTypes = {
  user: PropTypes.object,
  resetTheStore: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
