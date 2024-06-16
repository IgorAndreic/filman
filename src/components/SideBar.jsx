import React, { useEffect, useRef } from 'react';

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
    <div ref={sidebarRef} className="absolute top-14 left-0 w-12 h-full bg-zinc-600 flex flex-col items-center py-5 z-10">
      <div className="my-2 text-white text-3xl">
        <a href="/"> <img src="assets/Home.png" alt="Home" /> </a>
      </div>
      <div className="my-2 text-white text-3xl">
        <a href="/#"> <img src="assets/Union.png" alt="Union" /> </a>
      </div>
      <div className="my-2 text-white text-3xl cursor-pointer" onClick={() => toggleMenu('film')}>
        <img src="assets/Video.png" alt="Video" /> 
      </div>
      <div className="my-2 text-white text-3xl">
        <a href="/#"> <img src="assets/Play.png" alt="Play" /> </a>
      </div>
      <div className="my-2 text-white text-3xl">
        <a href="/#"> <img src="assets/Like.png" alt="Like" /> </a>
      </div>
      <div className="my-2 text-white text-3xl">
        <a href="/#"> <img src="assets/Heart.png" alt="Heart" /> </a>
      </div>
      <div className="my-2 text-white text-3xl">
        <a href="/#"> <img src="assets/Edit.png" alt="Edit" /> </a>
      </div>
      <div className="my-2 text-white text-3xl">
        <a href="/#"> <img src="assets/Chat.png" alt="Chat" /> </a>
      </div>
      <div className="my-2 text-white text-3xl">
        <a href="/#"> <img src="assets/Paper.png" alt="Paper" /> </a>
      </div>
      <div className="mt-auto mb-2 text-white text-3xl">
        <a href="/#"> <img src="assets/Setting.png" alt="Setting" /> </a>
      </div>
    </div>
  );
};

export default Sidebar;
