import React from 'react';
import './style.css';

export const Card = ({ title }) => {

  return (
    <div className="card">
      <h1>{title}</h1>
    </div>
  );
};

export default Card;
