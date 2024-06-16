import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaFilm, FaTv, FaSmile } from 'react-icons/fa';
import { GiFilmSpool } from 'react-icons/gi';
import { MdSettings } from 'react-icons/md';

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const sidebarRef = useRef(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={sidebarRef} className="fixed top-0 left-0 w-12 h-full bg-zinc-600 flex flex-col items-center py-5 z-10">
      <div className="my-2 text-white text-3xl"><FaHome /></div>
      <div className="my-2 text-white text-3xl cursor-pointer" onClick={() => toggleMenu('film')}><FaFilm /></div>
      <div className="my-2 text-white text-3xl"><GiFilmSpool /></div>
      <div className="my-2 text-white text-3xl"><FaTv /></div>
      <div className="my-2 text-white text-3xl"><FaSmile /></div>
      <div className="mt-auto mb-2 text-white text-3xl"><MdSettings /></div>
    </div>
  );
};

export default Sidebar;
