import React from 'react';
import MovieBanner from './MovieBanner';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import Search from './Search';
import MediumBanner from './MediumBanner';
import SmallBanner from './SmallBanner';
import RegularBanner from './RegularBanner';
import FilmShowcase from './FilmShowcase';
import RegistrationBanner from './RegistrationBanner';
import ForumCard from './ForumCard';
import Footer from './Footer';
import MainContainer from './MainContainer';
import PopularMovies from './PopularMovies';
import MovieRow from './MovieRow';


function Home() {
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

  const handleShowAll = () => {
    console.log("Переход к каталогу всех фильмов");
    // В будущем переход к компоненту Catalog
  };

  return (
    <MainContainer>
      <div className="absolute left-0 top-0 right-0 bottom-0 -z-20">
        <img src="assets/fon1.png" alt="Подсветка 1" className="absolute top-0 left-0 w-full h-auto -z-50" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[url('assets/fon2.png')] bg-cover"></div>
      </div>
      <Sidebar />
      <header className="bg-zinc-600 text-white sticky top-0 z-10"> 
        <Navbar />
        
      </header>
      <main className="flex flex-col">
        <MovieBanner /> 
        <Search />
        <PopularMovies />
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
