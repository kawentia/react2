import React from 'react';

// Принимаем массив items в качестве пропса
const List = ({ items }) => {
  return (
    <>
      <h2>List of Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default List;