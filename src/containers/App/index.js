import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './style.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      openingMovies =[]
    }
  }

  componentDidMount = () => {
    this.fetchOpeningMovies();
  }

  fetchOpeningMovies = async () => {
    const openingMovies = await fetchMovies();
    this.setState({ openingMovies })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
