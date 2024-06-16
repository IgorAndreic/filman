import React, { useState } from 'react';
import MovieBanner from './MovieBanner';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import Search from './Search';
import RegistrationBanner from './RegistrationBanner';
import Footer from './Footer';
import MainContainer from './MainContainer';
import PopularMovies from './PopularMovies';
import MovieRow from './MovieRow';
import FourColumns from './FourColumns';


function Home() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [ player, setPlayer ] = useState(null);


  return (
    <MainContainer>      
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <header className="sticky top-0 z-10"> 
        <Navbar />
      </header>
      <main className="flex flex-col">
        <MovieBanner />
        {activeMenu && <FourColumns activeMenu={activeMenu} />} 
        <Search />
        <PopularMovies player={player} setPlayer={setPlayer} />
        <MovieRow menuTitle = 'movies' />
        <MovieRow menuTitle = 'cartoons'/>
        <MovieRow menuTitle = 'series'/>
        <RegistrationBanner
          backgroundImage="assets/reg.png" // Укажите правильный путь к изображению
          userCount={508962}
        />
        <MovieRow />
        <MovieRow />
      </main>
      <footer>
        <Footer />
      </footer>
  
    </MainContainer>
  );
}

export default Home;
