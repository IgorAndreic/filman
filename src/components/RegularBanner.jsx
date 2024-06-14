import React from 'react';

function RegularBanner({ image, rating, title, ageCategory }) {
  return (
    <div style={{
      position: 'absolute',
      width: '345px',
      height: '195px',
      left: '122px',
      top: '1822px',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      borderRadius: '10px', // Скругление углов, если требуется
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '10px',
      color: 'white',
      fontSize: '16px'
    }}>
      <div style={{ alignSelf: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2px 5px', borderRadius: '5px' }}>
        {rating}
      </div>
      <div>
        <div style={{ fontWeight: 'bold' }}>{title}</div>
        <div>{ageCategory}</div>
      </div>
    </div>
  );
}

export default RegularBanner;
