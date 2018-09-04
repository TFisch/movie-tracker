import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header } from '../../components/Header';
import Login from '../../containers/Login';
import SignUp from '../../containers/SignUp';
import CardContainer from '../CardContainer';
import FavoriteContainer from '../FavoriteContainer';
import SelectedContainer from '../SelectedContainer';
import { fetchMovies } from '../../thunk/fetchMovies';
import './style.css';

export class App extends Component {
  componentDidMount = () => {
    this.props.fetchMovies();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={Header} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route path='/' component={SelectedContainer} />
          <Route exact path='/' component={CardContainer} />
          <Route exact path='/:landingPage' component={CardContainer} />
          <Route exact path='/:user/favorites' component={FavoriteContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies())
});

App.propTypes = {
  fetchMovies: PropTypes.func
};

export default connect(null, mapDispatchToProps)(App);
