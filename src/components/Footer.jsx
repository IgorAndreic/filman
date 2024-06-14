import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaVk, FaTelegramPlane } from 'react-icons/fa';

function Footer() {
  return (
    <div className='flex flex-wrap justify-center items-center w-full text-white z-10'>
        <div className="flex flex-col items-center z-10">
          <h4 className="font-semibold">Фильмы</h4>
          <ul className="list-none p-0">
            <li>Комедия</li>
            <li>Драма</li>
            <li>Боевики</li>
            <li>Триллеры</li>
          </ul>
        </div>
    
      <div className="flex flex-col items-center">
        
          <AiOutlineSearch size={20} className="mr-1.5 z-10" />
          <input type="text" placeholder="Поиск" className="flex-1 p-1.5 z-10" />
        </div>
        <ul className="list-none p-0 z-10">
          <li>FAQ</li>
          <li>Политика конфиденциальности</li>
          <li>Правила использования</li>
          <li>Социальные сети</li>
        </ul>
        <div>
          <FaVk size={20} className="mr-2.5" />
          <FaTelegramPlane size={20} />
        </div>
      </div>
    
  );
}

export default Footer;
