import React from 'react';
import { FaHome, FaFilm, FaTv, FaSmile } from 'react-icons/fa';
import { GiFilmSpool } from 'react-icons/gi';
import { MdSettings } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-16 bg-zinc-600 flex flex-col items-center py-5">
      <div className="my-2 text-white text-3xl"><FaHome /></div>
      <div className="my-2 text-white text-3xl"><FaFilm /></div>
      <div className="my-2 text-white text-3xl"><GiFilmSpool /></div>
      <div className="my-2 text-white text-3xl"><FaTv /></div>
      <div className="my-2 text-white text-3xl"><FaSmile /></div>
      <div className="mt-auto mb-2 text-white text-3xl"><MdSettings /></div>
    </div>
  );
};

export default Sidebar;
