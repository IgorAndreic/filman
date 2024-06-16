import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css';

const Navbar = ({ selectedMenu, setSelectedMenu }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuClick = (menuKey) => {
        if (location.pathname === "/catalog") {
            setSelectedMenu(menuKey); 
        } else {
            navigate(`/catalog`, { state: { menu: menuKey } }); 
        }
    };

    return (
        <section className="bg-zinc-600 max-w-full max-h-14 text-white mx-auto p-4 z-20 flex items-center justify-between">
          <nav className="flex space-x-8 text-xl items-center">
            <a href="/" >
              <img src="assets/logo.png" alt="Logo" className="h-10 w-40" />
            </a>
            {[
              { key: 'all', label: 'Все' },
              { key: 'movies', label: 'Фильмы' },
              { key: 'cartoons', label: 'Мультфильмы' },
              { key: 'series', label: 'Сериалы' }
            ].map((menu) => (
                <button key={menu.key} onClick={() => handleMenuClick(menu.key)} 
                className={`relative ${selectedMenu === menu.key ? 'text-blue-500' : ''}`}
                >
                    {menu.label}
                </button>
            ))}
            <img src="assets/Ellipse.png" alt="Ellipse" className="h-10 w-10 pb-auto pt-auto" />
          </nav>
        </section>
      );
};

export default Navbar;
