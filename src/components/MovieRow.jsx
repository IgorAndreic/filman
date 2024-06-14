import React from 'react';

// Массив с данными фильмов для примера
const movies = [
  { id: 1, title: "Film 1", rating: 8.1 },
  { id: 2, title: "Film 2", rating: 8.2 },
  { id: 3, title: "Film 3", rating: 8.3 }
];

const MovieRow = () => {
  return (
    <>
    <h2 className="text-xl text-center font-semibold text-white">Новинки кино</h2>
    <div className="flex flex-wrap justify-center items-center w-5/6 ml-auto mr-auto px-4 py-2 mb-12 z-10">
      <div className="flex space-x-4 w-full">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-1 bg-gray-200 p-4 rounded-lg h-28 shadow">
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <p className="text-sm">Rating: {movie.rating}</p>
          </div>
        ))}
      
        <div className="flex items-center">
            {/* Иконка стрелки (используем изображение в качестве иконки) */}
            <a href="/catalog" className="text-blue-500 hover:text-blue-700">
                <img src="assets/show_all.png" alt="Show All" />  {/* Исправлено: добавлен alt и правильный формат тега */}
            </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default MovieRow;
