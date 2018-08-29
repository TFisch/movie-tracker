import * as actions from '../actions'

describe('actions', () => {
  it('should return a type of ADD_MOVIES, with the movies', () => {
    const mockMovieData = [
      { title: 'Good Will Hunting', poster_path: '/g4oih2nkfs/sdaf3klj.jpg', release_date: '1998-02-17' },
      { title: 'Bourne Supremacy', poster_path: '/l1orojfjfs/sdaf3klj.jpg', release_date: '2001-03-22' },
      { title: 'Legend of Bagger Vance', poster_path: '/g4qwepokfs/saf23lj.jpg', release_date: '2004-11-06' }
    ]
    const expectation = { type: 'ADD_MOVIES', movieData: mockMovieData }

    const result = actions.addMovies(mockMovieData);
    expect(result).toEqual(expectation);
  })
})



