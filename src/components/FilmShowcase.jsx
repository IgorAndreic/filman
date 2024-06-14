import React from 'react';
import RegularBanner from './RegularBanner';

function FilmShowcase({ films, onShowAll }) {
  return (
    <div className="relative">
      <div className="flex overflow-hidden" style={{ height: '195px' }}>
        {films.slice(0, 3).map((film, index) => (
          <RegularBanner key={index} {...film} />
        ))}
      </div>
      <button
        onClick={onShowAll}
        className="absolute right-0 top-0 mt-2 mr-2 p-2 bg-blue-500 text-white rounded"
      >
        Показать все
      </button>
    </div>
  );
}

export default FilmShowcase;
