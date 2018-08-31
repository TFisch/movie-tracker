import React from 'react';
import { Link, Route } from 'react-router-dom';
import './style.css';

export const NavBar = () => {
  const noLoggedInNav = () => (
    <div>
      <Link to='/login'><button className='button'>Login</button></Link>
      <Link to='/signup'><button className='button'>SignUp</button></Link>
    </div>
  );

  const loggedInNav = () => (
    <div>
      <h1>Welcome! User</h1>
      <Link to='/user/favorites'><button className='button'>Favorites</button></Link>
      <Link to='/'><button className='button'>Logout</button></Link>
    </div>
  );

  return (
    <div className='nav-bar'>
      <Route exact path='/' component={noLoggedInNav}></Route>
      <Route path='/user' component={loggedInNav}></Route>
    </div>
  );
};
