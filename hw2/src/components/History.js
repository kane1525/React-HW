import React from 'react';

export const History = ({ history }) => {
  return (
    <ul className="history">
      {history.length > 0 ? (
        history.map((item) => <li key={item}>{item}</li>)
      ) : (
        <li>list is emty</li>
      )}
    </ul>
  );
};
