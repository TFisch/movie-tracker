import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { addMovies } from '../../actions/addMovies';
import { fetchMovies } from '../../api/apiCalls';
import CardContainer from '../CardContainer'
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
      <div className="App">
        <CardContainer />
      </div>
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
