import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { addMovies } from '../../actions';
import { fetchMovies } from '../../api/apiCalls';
import CardContainer from '../CardContainer';
import FavoriteContainer from '../FavoriteContainer';
import Login from '../../containers/Login';
import SignUp from '../../containers/SignUp';
import { Header } from '../../components/Header';
import './style.css';

export class App extends Component {
  componentDidMount = () => {
    this.fetchOpeningMovies();
  }

  fetchOpeningMovies = async () => {
    const { addMovies } = this.props;
    const openingMovies = await fetchMovies();
    addMovies(openingMovies);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={Header} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/' component={CardContainer} />
          <Route exact path='/:landingPage' component={CardContainer} />
          <Route exact path='/:user/favorites' component={FavoriteContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (moviesData) => dispatch(addMovies(moviesData))
});

App.propTypes = {
  addMovies: PropTypes.func
};

export default connect(null, mapDispatchToProps)(App);
