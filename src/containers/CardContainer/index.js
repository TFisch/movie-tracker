import React from 'react';
import { Card } from '../../components/Card'
import { connect } from 'react-redux';


const CardContainer = (props) => {
  const displayMovies = props.movies.map(movie => <Card  {...movie} />)
  return (
    <div className="card-container">
      {displayMovies}
    </div>
  )
}

export const mapStateToProps = (state) => ({
  movies: state.moviesData
})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);