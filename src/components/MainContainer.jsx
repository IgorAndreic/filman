import React from 'react';

function MainContainer({ children }) {
    
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#3c4549] shadow-lg overflow-hidden z-0 
                    bg-multi-pattern bg-multi-pattern-pos bg-multi-pattern-size">  
        {children}
        </div>
    );
    }   

export default MainContainer;
