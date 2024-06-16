import React from 'react';

const SortComponent = ({ sortOption, setSortOption }) => {
  const options = [
    { key: 'alphabetical', label: 'По алфавиту' },
    { key: 'rating', label: 'Рейтинг' },
    { key: 'views', label: 'Простмотры' }
  ];

  // Функция для имитации отправки запроса на сервер
  const sendSortRequest = (option) => {
    console.log(`Request sent for sorting by: ${option}`);
    // Здесь будет код для отправки запроса на сервер
  };

  // Обработчик изменений, вызывающий функцию sendSortRequest
  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption);
    sendSortRequest(selectedOption);
  };

  return (
    <div className="flex items-center space-x-4 ml-20 z-20">
      <span className='text-white'>Сортировка:</span>
      {options.map((option) => (
        <div
          key={option.key}
          className={`cursor-pointer ${sortOption === option.key ? 'text-blue-500 font-bold' : 'text-white hover:text-blue-500'}`}
          onClick={() => handleSortChange(option.key)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default SortComponent;
