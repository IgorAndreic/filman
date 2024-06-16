import React, { useState } from 'react';

const Filter = ({ onApply }) => {
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [country, setCountry] = useState('');

  const handleApply = () => {
    onApply({ year, genre, country });
  };

  return (
    <div className="absolute top-14 right-0 h-full w-40 bg-zinc-600 p-4 shadow-lg text-white flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Фильтр</h2>
      
      <div className="flex flex-col mb-4">
        <label htmlFor="genre" className="mb-2">Жанр</label>
        <select id="genre" value={genre} onChange={e => setGenre(e.target.value)} className="mb-4 text-black">
          <option value="">Выберите жанр</option>
          <option value="action">Боевик</option>
          <option value="drama">Драма</option>
          {/* Другие жанры */}
        </select>
      </div>
      
      <div className="flex flex-col mb-4">
        <label htmlFor="year" className="mb-2">Год выхода</label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={e => setYear(e.target.value)}
          placeholder="Например, 2020"
          className="text-black mb-4"
        />
      </div>
      
      <div className="flex flex-col mb-6">
        <label htmlFor="country" className="mb-2">Страна</label>
        <select id="country" value={country} onChange={e => setCountry(e.target.value)} className="text-black">
          <option value="">Выберите страну</option>
          <option value="usa">США</option>
          <option value="russia">Россия</option>
          {/* Другие страны */}
        </select>
      </div>
      
      <button onClick={handleApply} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Применить
      </button>
    </div>
  );
};

export default Filter;
