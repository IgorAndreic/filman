import React from 'react';
import MainContainer from '../MainContainer';
import Navbar from '../NavBar';
import Sidebar from '../SideBar';

function HomeCatalog() {
  return (
    <div>
      <MainContainer>
        <Sidebar />
        <header className="bg-zinc-600 text-white sticky top-0 z-10"> 
          <Navbar />
          
        </header>
            
            
      </MainContainer>
    </div>
  );
}
export default HomeCatalog;