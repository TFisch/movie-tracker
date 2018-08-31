import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import './style.css';

const CardContainer = (props) => {
  const displayMovies = props.movies.map(movie => <Card key={movie.id} movie={movie} />);
  return (
    <div className="card-container">
      {displayMovies}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.moviesData
});

CardContainer.propTypes = {
  movies: PropTypes.array
};

export default connect(mapStateToProps)(CardContainer);
