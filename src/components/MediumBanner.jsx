import React from 'react';

function MediumBanner({ image, position, rating, title, country, year, genre, ageCategory, likes, dislikes }) {
  return (
    <div style={{
      position: 'absolute',
      width: '588px',
      height: '332px',
      left: '122px',
      top: '1074px',
      backgroundImage: `url(${image})`,
      borderRadius: '20px',
      backgroundSize: 'cover',
      color: 'white'
    }}>
      <div className="banner-content" style={{ padding: '20px' }}>
        <div className="movie-title" style={{ fontSize: '24px', fontWeight: 'bold' }}>{title}</div>
        <div className="movie-info" style={{ fontSize: '16px' }}>
          {year} • {genre} • {country}
        </div>
        <div className="rating-age" style={{ fontSize: '16px' }}>
          Рейтинг: {rating} • Возраст: {ageCategory}
        </div>
        <div className="likes-dislikes">
          <span style={{ marginRight: '10px' }}>👍 {likes}</span>
          <span>👎 {dislikes}</span>
        </div>
      </div>
    </div>
  );
}

export default MediumBanner;
