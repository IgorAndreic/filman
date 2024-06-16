import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MainContainer from '../MainContainer';
import Navbar from '../NavBar';
import Sidebar from '../SideBar';
import Footer from '../Footer';
import FourColumns from '../FourColumns';
import Search from '../Search';
import ButtonBar from './ButtonBar';
import SortComponent from './SortComponent';
import MovieBanners from './MovieBanners';

function HomeCatalog() {
  const location = useLocation();
  const activeHead = location.state?.menu;
  const [selectedMenu, setSelectedMenu] = useState(activeHead || 'all');
  const [activeMenu, setActiveMenu] = useState(null);
  const [active, setActive] = useState(null);
  const [sortOption, setSortOption] = useState('alphabetical');

  const menuTitles = {
    all: 'Все',
    movies: 'Фильмы',
    cartoons: 'Мультфильмы',
    series: 'Сериалы'
  };

  const movies = [
    { id: 1, title: "Movie Title 1", rating: 8.2 },
    { id: 2, title: "Movie Title 2", rating: 7.4 },
    { id: 3, title: "Movie Title 3", rating: 6.5 },
    { id: 4, title: "Movie Title 4", rating: 5.6 },
    { id: 5, title: "Movie Title 5", rating: 8.9 },
    { id: 6, title: "Movie Title 6", rating: 7.2 },
    { id: 7, title: "Movie Title 7", rating: 8.0 },
    { id: 8, title: "Movie Title 8", rating: 8.1 },
    { id: 9, title: "Movie Title 9", rating: 5.8 },
    { id: 10, title: "Movie Title 10", rating: 7.3 },
    { id: 11, title: "Movie Title 11", rating: 8.5 },
    { id: 12, title: "Movie Title 12", rating: 6.9 },
    { id: 13, title: "Movie Title 13", rating: 6.4 },
    { id: 14, title: "Movie Title 14", rating: 7.0 },
    { id: 15, title: "Movie Title 15", rating: 7.5 },
    { id: 16, title: "Movie Title 16", rating: 7.8 }, 
    { id: 17, title: "Movie Title 17", rating: 8.6 },
    { id: 18, title: "Movie Title 18", rating: 7.1 }
  ];
  

  return (
    <>
    <MainContainer>
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <header className="bg-zinc-600 text-white sticky top-0 z-10"> 
        <Navbar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
      </header>
      <main className="flex flex-col flex-grow">
      <div className="flex top-24 mt-12 sm:ml-10 md:ml-20 lg:ml-40 text-left text-white text-5xl">
        <h1>{menuTitles[selectedMenu]}</h1>
      </div>
        <ButtonBar active={active} setActive={setActive}/>
        <Search />
        <SortComponent sortOption={sortOption} setSortOption={setSortOption} />
        <MovieBanners movies={movies} />
        {activeMenu && <FourColumns activeMenu={activeMenu} />} 
      </main>
      <footer>
        <Footer />
      </footer>     
    </MainContainer>
  </>
  );
}
export default HomeCatalog;