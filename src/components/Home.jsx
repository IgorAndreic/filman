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

  const movieData = {
    image: 'path_to_image.jpg', // Замените на реальный путь к изображению
    position: 1,
    rating: '8.1',
    title: 'Мстители: Война бесконечности',
    country: 'США',
    year: '2018',
    genre: 'фантастика, боевик, приключения',
    ageCategory: '16+',
    likes: 133255,
    dislikes: 17
  };

  const films = [
    // Массив с данными фильмов
    {
      image: 'path_to_infinity_war_image.jpg',
      rating: '8.1',
      title: 'Мстители: Война бесконечности',
      ageCategory: '16+'
    },
    // Добавьте еще два фильма
  ];

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
        <MovieRow />
        <MovieRow />
        <MovieRow />
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
