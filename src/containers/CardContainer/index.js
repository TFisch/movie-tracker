import React from 'react';
import { Card } from '../../components/Card';
import { connect } from 'react-redux';
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

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
