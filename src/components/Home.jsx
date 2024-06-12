import React from 'react';
import MovieBanner from './MovieBanner';
import Navbar from './NavBar';
import Sidebar from './SideBar';

function Home() {
  return (
    <>
    <Sidebar />
    <header className="bg-zinc-600 text-white sticky top-0 z-10"> 
        <Navbar />
    </header>
    <main className="max-w-4xl mx-auto pl-16">
      <MovieBanner /> 
      
    </main>
    </>
  );
}

export default Home;
