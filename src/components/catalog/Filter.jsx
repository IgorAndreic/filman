import React, { useState } from 'react';

const Filter = ({ onApply }) => {
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [country, setCountry] = useState('');

  const handleApply = () => {
    onApply({ year, genre, country });
  };

  return (
    <div className="absolute top-14 right-0 min-h-screen w-40 bg-zinc-600 p-4 shadow-lg text-white flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Фильтр</h2>
      
      <div className="flex flex-col mb-4">
          <h4 className="font-semibold">Жанр</h4>
          <ul className="list-none">
            <li>Боевик</li>
            <li>Вестерн</li>
            <li>Военный</li>
            <li>Детектив</li>
            <li>Драма</li>
            <li>Документальный</li>
            <li>Исторический</li>
            <li className='text-custom-blue'> Показать все</li>
          </ul>
        </div>
      
        <div className="flex flex-col mb-4">
          <h4 className="font-semibold">Год</h4>
          <ul className="list-none">
            <li>2024</li>
            <li>2023</li>
            <li>2022</li>
            <li className="text-custom-blue">Показать все</li>
          </ul>
        </div>
      
        <div className="flex flex-col mb-4">
          <h4 className="font-semibold">Страна</h4>
          <ul className="list-none">
            <li>Турецкие</li>
            <li>Корейские</li>
            <li>Российские</li>
            <li>Западные</li>
            <li className="text-custom-blue">Показать все</li>
          </ul>
        </div>

        <div className="flex flex-col mb-4">
          <h4 className="font-semibold">Студия</h4>
          <ul className="list-none">
            <li>Кинопоиск</li>
            <li>Okko</li>
            <li>AppleTV</li>
            <li>ivi</li>
            <li className="text-custom-blue">Показать все</li>
          </ul>
        </div>
      
      <button onClick={handleApply} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Применить
      </button>
    </div>
  );
};

export default Filter;
