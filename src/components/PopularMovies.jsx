import React from 'react';

const movies = [
  { id: 1, title: "Movie 1", rating: 8.7 },
  { id: 2, title: "Movie 2", rating: 8.6 },
  { id: 3, title: "Movie 3", rating: 8.5 },
  { id: 4, title: "Movie 4", rating: 8.4 },
  { id: 5, title: "Movie 5", rating: 8.3 },
  { id: 6, title: "Movie 6", rating: 8.2 }
];

const PopularMovies = ({player, setPlayer}) => {

  const handleClick = (movie) => () => {
    setPlayer(movie);
  }

  return (
    <div className="flex flex-wrap justify-center items-start mx-auto w-5/6 px-4 mb-12 z-10">
        <h2 className="text-2xl font-semibold my-4 text-white">Популярное</h2>
      <div className="grid grid-cols-2 gap-4 w-full">
        {movies.map((movie, index) => {
          // Классы для разных форматов баннеров
          const sizeClass = index < 2 ? 'col-span-1 h-48 relative' : 'col-span-1 h-20 relative';
          return (
            <div key={movie.id} className={`${sizeClass} flex flex-row justify-between p-4 bg-gray-200 rounded-lg shadow cursor-pointer`} onClick={handleClick(movie)}>
              {index < 2 ? (
                <>
                  <div className="relative w-14 h-14 bg-black rounded-full overflow-hidden">
                    <img src={`assets/${index + 1}.png`} alt="Rating"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8"
                    />
                  </div>
                  <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">{movie.title}</h2>
                  <p className="text-sm">Rating: {movie.rating}</p>
                  </div>
                  </>
                ) : (
                  <>
                  <img src={`assets/${index + 1}.png`} alt="Show All" className='h-8 w-8' />
                  <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">{movie.title}</h2>
                  <p className="text-sm">Rating: {movie.rating}</p>
                  </div>
                  </>
                )} 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularMovies;
