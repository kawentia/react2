import React from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = React.useState(false);

  // Проверка, что поле info существует и является строкой
  const displayInfo = info ? (readMore ? info : `${info.substring(0, 200)}...`) : 'No information available';

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {displayInfo}
          {info && (
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'Show less' : 'Read more'}
            </button>
          )}
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;