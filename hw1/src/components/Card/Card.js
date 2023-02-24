import React from 'react';

export default function Card({ user, setModal }) {
  const { name, age, gender, balance, picture, _id } = user;
  return (
    <div
      className="card"
      onClick={() => {
        setModal({ currentUser: _id, show: true });
      }}
    >
      <img src={picture} alt="item-presentation" />
      <p>{name}</p>
      <p>{age}</p>
      <p>{gender}</p>
      <p>{balance}</p>
    </div>
  );
}
