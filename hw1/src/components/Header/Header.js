import React from 'react';

export default function Header({ filters, setFilters }) {
  return (
    <div className="header" onClick={() => console.log('hi')}>
      <input
        type="text"
        name="name"
        value={filters.name}
        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
      />
      <select
        value={filters.age}
        onChange={(e) => setFilters({ ...filters, age: e.target.value })}
      >
        <option value="default">Дефолт</option>
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
      <button onClick={() => setFilters({ name: '', age: 'default' })}>
        Reset
      </button>
    </div>
  );
}
