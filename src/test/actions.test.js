import * as actions from '../actions';

describe('actions', () => {
  const mockMoviesData = [
    { title: 'Good Will Hunting', poster_path: '/g4oih2nkfs/sdaf3klj.jpg', release_date: '1998-02-17' },
    { title: 'Bourne Supremacy', poster_path: '/l1orojfjfs/sdaf3klj.jpg', release_date: '2001-03-22' },
    { title: 'Legend of Bagger Vance', poster_path: '/g4qwepokfs/saf23lj.jpg', release_date: '2004-11-06' }
  ];
  const mockMovie = { title: 'Good Will Hunting', poster_path: '/g4oih2nkfs/sdaf3klj.jpg', release_date: '1998-02-17', movie_id: 299536 };
  const mockMovieId = 299536;
  const mockUser = { user_id: 1, name: 'Taylor' };

  it('should return a object with type of ADD_MOVIES, with the movies', () => {
    const expectation = { type: 'ADD_MOVIES', movieData: mockMoviesData };
    const result = actions.addMovies(mockMoviesData);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of ADD_FAVORITE, with a movie', () => {
    const expectation = { type: 'ADD_FAVORITE', movie: mockMovie };
    const result = actions.addFavorite(mockMovie);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of REMOVE_FAVORITE, with a movie id', () => {
    const expectation = { type: 'REMOVE_FAVORITE', movie_id: mockMovieId };
    const result = actions.removeFavorite(mockMovie);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of SET_ACTIVE_USER, with a user id and name', () => {
    const expectation = {
      type: 'SET_ACTIVE_USER',
      user_id: mockUser.user_id,
      name: mockUser.name
    };
    const result = actions.setActiveUser(mockUser);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of SET_USER_FAVORITES, with favorites', () => {
    const expectation = {
      type: 'SET_USER_FAVORITES',
      favorites: mockMoviesData
    };
    const result = actions.setUserFavorites(mockMoviesData);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of RESET_THE_STORE', () => {
    const expectation = {
      type: 'RESET_THE_STORE'
    };
    const result = actions.resetTheStore();
    expect(result).toEqual(expectation);
  });
});



