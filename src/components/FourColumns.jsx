import React from 'react';

const FourColumns = () => {
  return (
    <div className="absolute inset-x-0 mt-8 bg-zinc-600 text-white text-center shadow-md p-4 grid grid-cols-4 gap-4">
      <hr className="col-span-4" />
      <div className="flex-1 max-w-xs mx-auto text-left">
        <div className="font-bold">Жанры</div>
        <a href="#comedy" className="block hover:opacity-90 text-left">Комедия</a>
        <a href="#drama" className="block hover:opacity-90 text-left">Драма</a>
        <a href="#fantasy" className="block hover:opacity-90 text-left">Фантастика</a>
        <a href="#detective" className="block hover:opacity-90 text-left">Детектив</a>
      </div>
      
      <div className="flex-1 max-w-xs mx-auto text-left">
        <div className="font-bold">По годам</div>
        <a href="#2024" className="block hover:opacity-90 text-left">2024</a>
        <a href="#2023" className="block hover:opacity-90 text-left">2023</a>
        <a href="#2022" className="block hover:opacity-90 text-left">2022</a>
        <a href="#2021" className="block hover:opacity-90 text-left">2021</a>
      </div>

      <div className="flex-1 max-w-xs mx-auto text-left">
        <div className="font-bold">По странам</div>
        <a href="#usa" className="block hover:opacity-90 text-left">США</a>
        <a href="#russia" className="block hover:opacity-90 text-left">Россия</a>
        <a href="#korea" className="block hover:opacity-90 text-left">Корея</a>
        <a href="#turkey" className="block hover:opacity-90 text-left">Турция</a>
      </div>

      <div className="flex-1 max-w-xs mx-auto text-left">
        <div className="font-bold">Телеканал</div>
        <a href="#netflix" className="block hover:opacity-90 text-left">Netflix</a>
        <a href="#apple" className="block hover:opacity-90 text-left">Apple TV</a>
        <a href="#kinopoisk" className="block hover:opacity-90 text-left">Кинопоиск</a>
        <a href="#okko" className="block hover:opacity-90 text-left">Окко</a>
      </div>
    </div>
  );
};

export default FourColumns;
