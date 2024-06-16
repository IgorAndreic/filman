import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaVk, FaTelegramPlane } from 'react-icons/fa';

function Footer() {
  // Примерная функция для обработки поиска, добавьте свою реализацию
  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Search executed');
  };

  return (
    <div className="grid grid-cols-6 gap-1 justify-center items-start w-full bg-black text-white py-8">
      {/* Колонка для списков */}
      <div className="col-span-3 flex space-x-4 text-sm ml-auto mr-auto">
        <div className="flex flex-col">
          <h4 className="font-semibold">Фильмы</h4>
          <ul className="list-none">
            <li>Комедия</li>
            <li>Драма</li>
            <li>Боевики</li>
            <li>Триллеры</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold">Мультфильмы</h4>
          <ul className="list-none">
            <li>Аниме</li>
            <li>Детские</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold">Сериалы</h4>
          <ul className="list-none">
            <li>Турецкие</li>
            <li>Корейские</li>
            <li>Российские</li>
            <li>Западные</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold">Форум</h4>
          <ul className="list-none">
            <li>Вход</li>
            <li>Регистрация</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold">Новости</h4>
          <ul className="list-none">
            <li>Последние</li>
            <li>Интересные</li>
          </ul>
        </div>
      </div>

      {/* Колонка для поиска и лого */}
      <div className="col-span-1 flex flex-col items-center justify-start">
      <form onSubmit={handleSearch} className="flex items-center w-full max-w-xs bg-white rounded-lg shadow-md relative">
        <input type="text" placeholder="Поиск" className="flex-grow p-2  rounded-lg text-black" />
        <button type="submit" className="absolute right-2 text-gray-500">
          <AiOutlineSearch size={20} />
        </button>
      </form>
        <a href="/" className="mt-4">
          <img src="assets/logo.png" alt="Logo" className="h-10 w-40" />
        </a>
      </div>

      {/* Колонка для информации и социальных сетей */}
      <div className="col-span-2 flex flex-col items-center justify-start">
        <ul className="list-none">
          <li>FAQ</li>
          <li>Политика конфиденциальности</li>
          <li>Правила использования</li>
          <li>Социальные сети</li>
        </ul>
        <div className="flex space-x-2.5 mt-2">
          <FaVk size={20} />
          <FaTelegramPlane size={20} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
