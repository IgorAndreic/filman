import React, { useState } from 'react';

const ButtonBar = ({active, setActive}) => {
    
    const buttons = [
        { id: '2024', label: '2024' },
        { id: '2023', label: '2023' },
        { id: '2022', label: '2022' },
        { id: 'fantasy', label: 'Фантастика' },
        { id: 'comedy', label: 'Комедия' },
        { id: 'horror', label: 'Ужасы' }
    ];

    return (
        <div className="p-4 text-white flex justify-center space-x-4 z-10">
            {buttons.map((button) => (
                <button
                    key={button.id}
                    onClick={() => setActive(button.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium 
                                ${active === button.id ? 'bg-black' : 'bg-opacity-50 bg-black'}`}
                >
                    {button.label}
                </button>
            ))}
            
        </div>
    );
};

export default ButtonBar;
