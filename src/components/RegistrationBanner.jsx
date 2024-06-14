import React from 'react';

function RegistrationBanner({ backgroundImage, userCount }) {
  return (
    <div className="w-2/3 mx-auto mt-12 mb-12 bg-cover rounded-2xl flex items-center justify-center text-white text-2xl z-10"
    style={{ backgroundImage: `url(${backgroundImage})`, height: '400px' }}>
 <div className="bg-black bg-opacity-50 p-8 rounded-2xl text-center z-10">
   <div className="text-5xl text-custom-blue font-bold mb-8">{userCount.toLocaleString()} </div>
   <p className="mb-4">cчастливых пользователей</p>
   <button className="bg-custom-blue hover:bg-blue-700 text-black py-3 px-6 rounded cursor-pointer mb-4 text-lg">
     Регистрируйся
   </button>
   <div>Уже с нами? <a href="#" className="text-cyan-500 hover:text-cyan-700">Войти</a></div>
 </div>
</div>
  );
}

export default RegistrationBanner;
