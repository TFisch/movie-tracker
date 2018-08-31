import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const NavBar = () => {
  return (
    <div className='nav-bar'>
      <Link to='/login'><button className='login'>Login</button></Link>
      <Link to='/signup'><button className='signup'>SignUp</button></Link>
    </div>
  );
};
