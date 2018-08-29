import React from 'react';
import { NavBar } from '../../containers/NavBar';
import { Route } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <h1>Movie Tracker</h1>
      <Route path='/' component={NavBar} />
    </div>
  );
};
