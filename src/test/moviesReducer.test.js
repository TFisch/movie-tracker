import { moviesReducer } from '../reducers/moviesReducer'
import * as actions from '../actions'

describe('moviesReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = moviesReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with the top twenty movies', () => {
    const mockMovieData = [
      { title: 'Good Will Hunting', poster_path: '/g4oih2nkfs/sdaf3klj.jpg', release_date: '1998-02-17' },
      { title: 'Bourne Supremacy', poster_path: '/l1orojfjfs/sdaf3klj.jpg', release_date: '2001-03-22' },
      { title: 'Legend of Bagger Vance', poster_path: '/g4qwepokfs/saf23lj.jpg', release_date: '2004-11-06' }
    ]

    expect(moviesReducer(undefined, actions.addMovies(mockMovieData))).toEqual(mockMovieData)

  })
})
