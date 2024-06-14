import React from 'react';

function NewsCard({ image, title, description }) {
  return (
    <div style={{
      width: '200px',
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <img src={image} alt="News" style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
      <div style={{
        padding: '10px',
        backgroundColor: '#fff',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <h3 style={{ fontSize: '16px', margin: '0 0 10px 0' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: '#666', margin: '0' }}>{description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
