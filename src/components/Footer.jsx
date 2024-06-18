import React from 'react';
import { FaVk, FaTelegramPlane } from 'react-icons/fa';
import search from '/assets/search.svg';
import VK from '/assets/VK.svg';
import tg from '/assets/tg.svg';

function Footer() {
  // Примерная функция для обработки поиска, добавьте свою реализацию
  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Search executed');
  };

  return (
    <div>
    <div className="grid grid-cols-6 gap-1 h-[377px] justify-center items-start w-full bg-[#0D0D0D] text-white py-8 pt-[60px]">
      {/* Колонка для списков */}
      <div className="col-span-3 flex space-x-20 text-sm mr-auto ml-[120px] mb-8">
        <div className="flex flex-col space-y-4">
          <h4 className="font-semibold">Фильмы</h4>
          <ul className="flex flex-col space-y-2 list-none">
            <li>Комедия</li>
            <li>Драма</li>
            <li>Боевики</li>
            <li>Триллеры</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-semibold">Мультфильмы</h4>
          <ul className="flex flex-col space-y-2 list-none">
            <li>Аниме</li>
            <li>Детские</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-semibold">Сериалы</h4>
          <ul className="flex flex-col space-y-2 list-none">
            <li>Турецкие</li>
            <li>Корейские</li>
            <li>Российские</li>
            <li>Западные</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-semibold">Форум</h4>
          <ul className="flex flex-col space-y-2 list-none">
            <li>Вход</li>
            <li>Регистрация</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-semibold">Новости</h4>
          <ul className="flex flex-col space-y-2 list-none">
            <li>Последние</li>
            <li>Интересные</li>
          </ul>
        </div>
      </div>

      {/* Колонка для поиска и лого */}
      <div className=" flex flex-col items-center justify-start ">
      </div>

      {/* Колонка для информации и социальных сетей */}
      <div className="col-span-2 flex flex-col justify-start">
        
      <div className="flex items-center w-full max-w-xs bg-black rounded-lg shadow-md relative mb-8">
        <input type="text" placeholder="Поиск" className="flex-grow p-2  rounded-full w-80 h-10 bg-[#1D1D1D]" />
        <button type="submit" className="absolute right-2 text-gray-500 bg-[#0D0D0D]">
          <img src={search}/>
        </button>
      </div>
        <ul className="list-none">
          <li>FAQ</li>
          <li>Политика конфиденциальности</li>
          <li className='mb-20'>Правила использования</li>
          <li>Социальные сети</li>
        </ul>
        <div className="flex space-x-2.5 mt-2">
          <img src={VK} />
          <img src={tg} />
        </div>
      </div>
    </div>
      <div className=' relative w-full'>
      <div className="bg-gradient-to-r to-[#1AECDF] via-[#1761DA] via-55% from-[#EC33CC] blur-3xl opacity-50 rotate-[75deg] w-[400px] h-[330px] rounded-full absolute left-[-17rem] bottom-[-7rem]"></div>
      <div className="bg-gradient-to-r from-[#6906DD] via-[#EC33CC] via-47% to-[#E2F026] blur-3xl opacity-50 rotate-[0deg] w-[400px] h-[330px] rounded-full absolute left-[4rem] bottom-[-18rem]"></div>
      <div className="h-24 w-80 absolute  bottom-0 left-[7rem]">
        <a href="/" className="mt-4">
          <img src="assets/logo.png" alt="Logo"  className="h-24 w-60" />
        </a>
        </div>
        
      <div className="bg-gradient-to-r from-[#E2F026] to-[#1AECDF] blur-3xl opacity-50 rotate-[315deg] w-[400px] h-[330px] rounded-full absolute right-[-15rem] bottom-[-12rem]"></div>
        </div>
        </div>
  );
}

export default Footer;
