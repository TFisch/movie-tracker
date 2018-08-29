import React from 'react';
import { NavBar } from '../../containers/NavBar';
import { Route } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <div className='header'>
      <div className='title-container'>
        <h1>Movie Tracker</h1>
      </div>
      <Route path='/' component={NavBar} />
    </div>
  );
};
