import React, { useState, useEffect } from 'react';
import Loading from './Loading'; // Компонент для загрузки
import Tours from './Tours'; // Компонент для списка туров
import toursData from './data'; // Импортируем тестовые данные

function App() {
  const [loading, setLoading] = useState(false); // По умолчанию загрузка выключена
  const [tours, setTours] = useState(toursData); // Используем тестовые данные для туров

  // Функция для удаления тура
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Если идет загрузка (можно активировать при загрузке данных с API)
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // Если все туры удалены
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={() => setTours(toursData)}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  // Отображение списка туров
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;