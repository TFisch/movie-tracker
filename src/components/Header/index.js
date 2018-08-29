import React from 'react';
import { NavBar } from '../../containers/NavBar';
import { Route } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <div>
      <h1>Movie Tracker</h1>
      <Route path='/' component={NavBar} />
    </div>
  );
};
