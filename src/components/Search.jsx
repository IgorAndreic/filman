import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Импорт иконки лупы

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${encodeURIComponent(searchQuery)}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'X-API-KEY': '6M6GK5M-7GMM2R7-JD7J0W1-4Z5VYBK'
        }
      });
      console.log('Response:', response);

      if (!response.ok) {
        throw new Error('Ошибка сети');
      }

      const data = await response.json();
      setMovies(data.docs); // Предполагается, что ответ содержит массив `docs` с результатами
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (query) {
      fetchMovies(query);
    }
  };

  return (
    <div className="flex justify-center items-center mt-12 mb-12 z-10">
      <form onSubmit={handleSearch} className="flex items-center w-2/3 h-[50px] bg-white rounded-lg shadow-md">
      <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-3 rounded-l-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          placeholder="Введите запрос..."
          style={{ outline: 'none' }} 
        />
        <button type="submit" className="p-2 rounded-r-lg text-zinc-600">
          <AiOutlineSearch size={24} /> {/* Иконка лупы */}
        </button>
      </form>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title || movie.name}</li> 
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieSearch;
