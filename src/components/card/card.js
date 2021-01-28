import React, {useState} from 'react';

import './card.css';

const Card = ({label, tasks}) => {

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

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

          {!isActive && (
            <React.Fragment>
              <div 
                className='card__add'
                onClick={toggleActive}
              >
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
            </React.Fragment>
          )}
          {isActive && (
            <form 
              className='card__add-form'
              onSubmit={onSubmit}
            >
              <div>
                <div className='card__add-wrapper'>
                  <textarea
                    className='card__add-textarea'
                    placeholder='Ввести заголовок для этой карточки'
                  ></textarea>
                </div>
              </div>
              <div className='card__add-btn-wrapper'>
                <button
                  className='card__add-btn'
                >Добавить карточку</button>
                <span 
                  className="material-icons"
                  onClick={toggleActive}
                >
                  close
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card;