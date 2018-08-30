import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { addMovies } from '../../actions';
import { fetchMovies } from '../../api/apiCalls';
import CardContainer from '../CardContainer';
import Login from '../../containers/Login';
import { SignUp } from '../../containers/SignUp';
import { Header } from '../../components/Header';
import './style.css';

class App extends Component {
  componentDidMount = () => {
    this.fetchOpeningMovies();
  }

  fetchOpeningMovies = async () => {
    const openingMovies = await fetchMovies();
    this.props.addMovies(openingMovies);
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={Header} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route path='/' component={CardContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  addMovies: (moviesData) => dispatch(addMovies(moviesData))
});

App.propTypes = {
  addMovies: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
