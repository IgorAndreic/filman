import React, { useState, useEffect, useRef } from 'react';
import FourColumns from './FourColumns';
import './NavBar.css';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const menuRefs = useRef({
        all: useRef(null),
        movies: useRef(null),
        cartoons: useRef(null),
        series: useRef(null)
    });

    const toggleMenu = (menu) => {
        if (activeMenu === menu) {
            setActiveMenu(null);
        } else {
            setActiveMenu(menu);
        }
    };

    // Добавляем слушатель клика по всему документу
    useEffect(() => {
        const handleClickOutside = (event) => {
            const currentMenuRef = menuRefs.current[activeMenu];
            if (currentMenuRef && currentMenuRef.current && !currentMenuRef.current.contains(event.target)) {
                setActiveMenu(null); // Закрываем меню, если клик вне области меню
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Очищаем слушатель
        };
    }, [activeMenu, menuRefs]);

    return (
        <section className="max-w-4xl mx-auto p-4">
            {activeMenu && <FourColumns menuType={activeMenu} />}
            <nav className="flex flex-row space-x-8 text-xl">
                {[
                    { key: 'all', label: 'Все' },
                    { key: 'movies', label: 'Фильмы' },
                    { key: 'cartoons', label: 'Мультфильмы' },
                    { key: 'series', label: 'Сериалы' }
                ].map((menu) => (
                    <div key={menu.key} className="relative group" ref={menuRefs.current[menu.key]}>
                        <button onClick={() => toggleMenu(menu.key)}
                             className={`${activeMenu === menu.key ? 'active-menu-item' : ''}`}>{menu.label}</button>
                    </div>
                ))}
            </nav>
        </section>
    );
};

export default Navbar;
