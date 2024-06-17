import React, { useState } from 'react';

const Filter = ({ onApply }) => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedStudio, setSelectedStudio] = useState('');

  const genres = ['Боевик', 'Вестерн', 'Военный', 'Детектив', 'Драма', 'Документальный', 'Исторический'];
  const years = ['2024', '2023', '2022'];
  const countries = ['Турецкие', 'Корейские', 'Российские', 'Западные'];
  const studios = ['Кинопоиск', 'Okko', 'AppleTV', 'ivi'];

  const handleApply = () => {
    onApply({ genre: selectedGenre, year: selectedYear, country: selectedCountry, studio: selectedStudio });
  };

  return (
    <div className="absolute top-14 right-0 min-h-screen w-40 bg-zinc-600 p-4 shadow-lg text-white flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Фильтр</h2>
      
      <div className="flex flex-col mb-4">
        <h4 className="font-semibold">Жанр</h4>
        <div className="flex flex-wrap">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full text-sm font-medium m-1
                          ${selectedGenre === genre ? 'bg-black text-white' : 'bg-opacity-50 bg-black text-white'}`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <h4 className="font-semibold">Год</h4>
        <div className="flex flex-wrap">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-sm font-medium m-1
                          ${selectedYear === year ? 'bg-black text-white' : 'bg-opacity-50 bg-black text-white'}`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <h4 className="font-semibold">Страна</h4>
        <div className="flex flex-wrap">
          {countries.map(country => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-2 rounded-full text-sm font-medium m-1
                          ${selectedCountry === country ? 'bg-black text-white' : 'bg-opacity-50 bg-black text-white'}`}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <h4 className="font-semibold">Студия</h4>
        <div className="flex flex-wrap">
          {studios.map(studio => (
            <button
              key={studio}
              onClick={() => setSelectedStudio(studio)}
              className={`px-4 py-2 rounded-full text-sm font-medium m-1
                          ${selectedStudio === studio ? 'bg-black text-white' : 'bg-opacity-50 bg-black text-white'}`}
            >
              {studio}
            </button>
          ))}
        </div>
      </div>

      <button onClick={handleApply} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Применить
      </button>
    </div>
  );
};

export default Filter;