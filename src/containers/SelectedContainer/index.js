import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { manageSelectedMovie } from '../../actions';
import './style.css';

export const SelectedContainer = (props) => {
  const { selectedMovie, manageSelectedMovie } = props;
  const {
    overview,
    poster_path,
    release_date,
    title
  } = props.selectedMovie;

  const displayInfo = () => { 
    if (poster_path){
      return (
        <div className='selected-container' onClick={() => manageSelectedMovie(selectedMovie)}>
          <img className='poster-image' src={poster_path} alt='movie data' />
          <div className='selected-movie-content'>
            <h1>{title}</h1>
            <h3>RELEASE: {release_date}</h3>
            <p>DETAILS: {overview}</p>
          </div>
        </div>);
    } else {
      return <div></div>;
    }
  };

  return (
    <div className='selected-wrapper'>{displayInfo()}</div>
  );
};

export const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie
});

export const mapDispatchToProps = (dispatch) => ({
  manageSelectedMovie: (movie) => dispatch(manageSelectedMovie(movie))
});

SelectedContainer.propTypes = {
  selectedMovie: PropTypes.object,
  manageSelectedMovie: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedContainer);
