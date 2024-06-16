import React from 'react';
import RegistrationBanner from '../RegistrationBanner';

const MovieBanners = ({ movies }) => {
    if (!movies || movies.length === 0) {
      return <p>No movies available.</p>;
    }
  
    return (
        <div className="justify-center items-center w-5/6 mx-auto mt-10 px-4 py-2 mb-12 z-10">
        <div className="grid grid-cols-3 gap-4">
          {movies.slice(0, 15).map((movie) => (
            <div key={movie.id} className="bg-gray-200 p-4 rounded-lg shadow h-28">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm">Rating: {movie.rating}</p>
            </div>
          ))}
          <div className="col-span-3">
            <RegistrationBanner backgroundImage="assets/reg.png" userCount={508962}/>
          </div>
          {movies.slice(15).map((movie) => (
            <div key={movie.id} className="bg-gray-200 p-4 rounded-lg shadow h-28">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm">Rating: {movie.rating}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MovieBanners;