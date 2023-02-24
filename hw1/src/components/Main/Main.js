import React from 'react';
import Card from '../Card/Card';
import { userData } from '../../mockData/userData';

export default function Main({ filters, setModal }) {
  const inputValue = filters.name;
  const cards = userData
    .filter((user) =>
      user.name.toLowerCase().includes(inputValue.toLowerCase())
    )
    .map((user) => <Card setModal={setModal} key={user._id} user={user} />);

  if (filters.age !== 'default') {
    switch (filters.age) {
      case 'asc':
        cards.sort((a, b) => {
          return a.props.user.age - b.props.user.age;
        });
        break;
      case 'desc':
        cards.sort((a, b) => {
          return b.props.user.age - a.props.user.age;
        });
        break;
      default:
        break;
    }
  }
  return <div className="main">{cards}</div>;
}
