import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <Link to='/login'>login</Link>
      <Link to='/signup'>SignUp</Link>
    </div>
  );
};