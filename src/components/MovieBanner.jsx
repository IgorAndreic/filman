import React, { useEffect, useState } from 'react';

const MovieBanner = () => {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = 'https://api.kinopoisk.dev/v1.4/movie/random?rating.kp=8-10';
  
  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true); // Начало загрузки
      setError(null); // Очистка предыдущих ошибок

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'X-API-KEY': '3STFSVK-CN34YNE-PQTG091-F3FEVW3',
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setMovieData({
          title: data.name || "Загрузка...",
          year: data.year || "Дата не указана",
          genres: data.genres.map(genre => genre.name) || ["Жанр не указан"],
          country: data.countries.map(country => country.name).join(', ') || 'Страна не указана',
          description: data.description || "Описание недоступно.",
          rating: data.rating.kp || 0,
          imageUrl: data.backdrop?.url || "assets/assets/image123.png",
          posterUrl: data.poster?.url || 'assets/image131.png',
        });
        setIsLoading(false); // Загрузка завершена
      } catch (error) {
        setError('Не удалось загрузить данные о фильме.'); // Установка ошибки
        setIsLoading(false);
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="static w-full h-screen bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: `url(${movieData.imageUrl})` }}>
      {/* Overlay для затемнения фона и улучшения читаемости текста */}
      <div className="absolute w-full inset-0 bg-black bg-opacity-50 z-0"></div>
      
      {/* Контейнер для всего контента */}
      <div className="relative p-8 flex items-end h-4/5">
        {/* Постер фильма, расположенный слева внизу */}
        <div className="ml-20 w-80 h-120 relative">
            <img src={movieData.posterUrl} alt="Movie Poster" />
        </div>

        {/* Основной контент с заголовком и описанием */}
        <div className="ml-8 text-white max-w-1/3">
          <h1 className="text-4xl font-bold">{movieData.title}</h1>
          <p className=" mt-2">{movieData.year} • {movieData.genres.join(", ")} • {movieData.country}</p>
          <p className="mt-2 mb-8 w-2/3">{movieData.description}</p>
          <button className="bg-yellow-500 text-black px-8 py-2 mt-2 mb-2 rounded-full font-bold">Смотреть</button>
        </div>
        </div>

        {/* Блок с рейтингом фильма */}
        <div className="absolute top-20 right-6 bg-gray-800 bg-opacity-75 rounded-full p-2 text-yellow-500 font-bold">
          {movieData.rating}
      </div>
  </div>


  );
};

export default MovieBanner;
