import React, {useState} from 'react';

import Card from '../card';

import './table.css';
import './create-card.css';

const Table = ({data, addNewCard, addNewTask}) => {

  const [isActive, setIsActive] = useState(false);
  const [label, setLabel] = useState('');

  const toggleAddNewCard = (e) => {
    setIsActive(!isActive)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (label === '') {
      return
    }
    addNewCard(label)
    setLabel('');
    setIsActive(false);
  }

  const clazz = isActive ? ' active' : '';

  return (
    <div className='table'>
      <div className='table__wrapper'>
        {data.map((item) => (
          <Card
            label={item.label}
            tasks={item.tasks}
            id={item.id}
            key={item.id}
            addNewTask={(textareaValue) => addNewTask(textareaValue, item.id)}
          />
        ))}
        <div className={`create-card${clazz}`}>
          
            {!isActive && (
              <div 
                className='create-card-wrapper'
                onClick={toggleAddNewCard}
              >
                <span className="material-icons">
                  add
                </span>
                &nbsp;
                <span>Добавить еще одну колонку</span>
              </div>
            )}
            {isActive && (
              <form 
                className='create-card__form'
                onSubmit={onSubmit}
              >
                <input 
                  className='create-card__input' 
                  placeholder='Ввести заголовок списка' 
                  type='text' 
                  value={label}
                  onChange={e => setLabel(e.target.value)} 
                />
                <div className='create-card__trigger'>
                  <button
                    className='create-card__btn'
                  >Добавить список</button>
                  <span 
                    className="material-icons"
                    onClick={toggleAddNewCard}
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

export default Table;