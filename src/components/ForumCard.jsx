import React from 'react';

function ForumCard({ title, date, description }) {
  return (
    <div>
      <h1>Форум</h1>

      <div style={{
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px'
      }}>
        {title}
      </div>
      <div style={{
        fontSize: '14px',
        color: '#AAA', // Серый цвет для текста даты
        marginBottom: '15px'
      }}>
        {date}
      </div>
      <div style={{
        fontSize: '16px',
        lineHeight: '1.5',
        maxHeight: '140px',
        overflow: 'hidden' // Обрезка текста, если он слишком длинный
      }}>
        {description}
      </div>
    </div>
  );
}

export default ForumCard;
