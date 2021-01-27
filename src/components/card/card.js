import React from 'react';

import './card.css';

const Card = ({label, tasks}) => {
  return (
    <div className='card'>
      <div className='card__wrapper'>
        <div className='card__label'>
          <div className='card__name'  spellCheck="false">{label}</div>
          <div className='card__menu'>
            <span className="material-icons">
              menu
            </span>
          </div>
        </div>

        <div className='card__tasks'>
          {tasks.map(item => (
            <div 
              className='card__item'
              key={item.id}
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className='card__footer'>
          <div className='card__add'>
            <span className="material-icons">
              add
            </span>
            &nbsp;
            Добавить еще одну карточку
          </div>
          <div className='card__template'>
            <span className="material-icons">
              subtitles
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;