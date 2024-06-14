import React from 'react';

function MainContainer({ children }) {
    
    return (
        <div className="relative w-full min-h-screen bg-[#3c4549] shadow-lg overflow-hidden z-0">
            {/* <img src="assets/fon1.png" alt="Подсветка 1" className="absolute top-0 left-0 w-full h-auto -z-0" />
            <img src="assets/fon2.png" alt="Подсветка 1" className="absolute top-[20%] left-[10%] w-3/4 h-auto -z-0" /> */}
            {/* <img src="assets/fon3.png" alt="Подсветка 1" className="top-[50%] left-[30%] w-3/4 h-auto" /> */}
            <img src="assets/fon4.png" alt="Подсветка 1" className="absolute bottom-20 right-30 w-1/2 h-auto" />
            <img src="assets/fon5.png" alt="Подсветка 1" className="absolute bottom-0 right-0 w-1/2 h-auto" />
        {children}
        </div>
    );
    }   

export default MainContainer;
