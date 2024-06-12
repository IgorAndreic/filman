import React from 'react';

const MovieBanner = () => {
  // Заглушка для данных
  const movieData = {
    title: "Кратер",
    year: 2023,
    genres: ["фантастика", "драма", "приключения"],
    country: "США",
    description: "После смерти отца мальчик, выросший на лунной шахтерской колонии, вместе со своими четырьмя лучшими друзьями отправляется в путешествие, чтобы исследовать легендарный кратер перед тем, как его навсегда переселят на другую планету.",
    rating: 7.2,
    imageUrl: "src/assets/image123.png",  // Используйте правильный путь к изображению
    posterUrl: "src/assets/image131.png", // Используйте правильный путь к постеру
  };

  return (
    <>
    <section id="movibanner" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height flex-wrap">
        <div
        className="absolute top-0 rihgt-0 w-full h-full left-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${movieData.imageUrl})` }}>
            <div className="absolute w-full h-full bg-black bg-opacity-50">
            </div>
        </div>
        <article className="sm:w-1/2">
            
                <div className="flex flex-col space-y-3">
                <div className="absolute w-[371px] h-[91px] left-1/4 bottom-[220px] text-white font-bold text-7xl leading-[117px] flex items-end basic-1/4" style={{ fontFamily: 'Montserrat' }}>
                {movieData.title}
                </div>
                <div className="absolute text-base text-slate-50 w-[360px] h-[17px] left-1/4 bottom-[200px] text-m basic-1/4">
                {movieData.year} • {movieData.genres.join(", ")} • {movieData.country}
                </div>
                <div className="absolute w-[953px] h-[72px] left-1/4 bottom-[120px] text-white font-medium text-xl leading-[24px] flex items-center basic-1/4" style={{ fontFamily: 'Montserrat' }}>
                {movieData.description}
                </div>
                <button className="absolute left-1/4 bottom-[30px] bg-yellow-500 text-black font-bold text-2xl py-2 px-8 rounded"
                style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>
                Смотреть
                </button>
                </div>
            </article>
                <div className="absolute w-[223px] h-[335px] left-[8%] top-[40%] bg-cover" style={{ backgroundImage: `url(${movieData.posterUrl})` }}></div>

                <div className="absolute w-[40px] h-[40px] top-[60px] right-[20px] text-yellow-500 font-bold text-center text-xl text-bold py-2 px-2 shadow-lg rounded-lg">
                    {movieData.rating}
                </div>
      
    </section>
    </>
  );
};

export default MovieBanner;
