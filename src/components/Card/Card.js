import React, { useState } from 'react';
import './Card.sass';

export const Card = ({ brand, name, type, volume, present, top, weight, description, sold }) => {
  const [selected, setSelected] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handelClick = () => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };

  const cardClassName = `card ${sold ? 'card_sold' : selected ? 'card_active' : ''}`;
  const circleClassName = `card__circle circle ${sold ? 'circle_sold' : ''}`;

  return (
    <li className="cards__item cards-item">
      {sold ? <div className="card_owerlay-sold" /> : ''}
      <div
        className={cardClassName}
        onClick={handelClick}
        onMouseEnter={() => setIsShown(false)}
        onMouseLeave={() => setIsShown(true)}>
        <div className="card__wrapper">
          <div className="card__info">
            {selected ? (
              isShown ? (
                <p className="card__brand_no-show">Котэ не одобряет?</p>
              ) : (
                <p className="card__brand">{brand}</p>
              )
            ) : (
              <p className="card__brand">{brand}</p>
            )}
            <h3 className="card__title">{name}</h3>
            <span className="card__subtitle">{type}</span>
            <p className="card__text">{volume} порций</p>
            <p className="card__text">{present} в подарок</p>
            <p className="card__text">{top ? 'заказчик доволен' : ''}</p>
          </div>
          <div className={circleClassName}>
            <p className="circle__weight">{weight}</p>
            <p className="circle__text">кг</p>
          </div>
        </div>
      </div>
      {sold ? (
        <p className="cards-item__text cards-item__text_sold">Печалька, {type} закончился.</p>
      ) : selected ? (
        <p className="cards-item__text">{description}</p>
      ) : (
        <p className="cards-item__text">
          Чего сидишь? Порадуй котэ,
          <button className="cards-item__link" onClick={handelClick}>
            купи.
          </button>
        </p>
      )}
    </li>
  );
};
