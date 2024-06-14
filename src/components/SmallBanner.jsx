import React from 'react';

function SmallBanner({ position, image, rating, title, country, year, genre, likes, dislikes }) {
  return (
    <div style={{
      position: 'absolute',
      width: '588px',
      height: '100px',
      left: '122px',
      top: '1432px',
      backgroundImage: `url(${image})`,
      borderRadius: '20px',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      color: 'white',
      backgroundBlendMode: 'darken'
    }}>
      <div>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{position}. {title}</div>
        <div style={{ fontSize: '14px' }}>{year} • {genre}, {country}</div>
      </div>
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
        {rating}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>👍 {likes}</span>
        <span>👎 {dislikes}</span>
      </div>
    </div>
  );
}

export default SmallBanner;
