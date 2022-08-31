import React from 'react';
import './card.style.css';

const card = ({ monster }) => {
  const { id, name, username, email } = monster;

  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h1>{name} </h1>
      <span>{username}</span>
      <h3>{email}</h3>
    </div>
  );
};

export default card;
