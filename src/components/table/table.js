import React, {useState, useEffect} from 'react';

import Card from '../card';
import TableMenu from '../table-menu';

import './table.css';
import './create-card.css';

const Table = ({data, addNewCard, addNewTask, activeMenu, setActiveMenu, bgColorCol, setBoardColor, boardColor}) => {

  const [isActive, setIsActive] = useState(false);
  const [label, setLabel] = useState('');

  const toggleAddNewCard = () => {
    setIsActive(!isActive)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (label === '') {
      return
    }
    addNewCard(label)
    setLabel('');
  }

  useEffect(() => {
    if (!document.querySelector('.create-card__input')) {
      return
    }
    document.querySelector('.create-card__input').focus();
  }, [isActive, label])

  const clazz = isActive ? ' active' : '';

  const styleWrapper = activeMenu ? ' activeMenu' : ''

  return (
    <div className='table'>
      <div 
        className={`table__wrapper${styleWrapper}`}
      >
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
      <TableMenu
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        bgColorCol={bgColorCol}
        setBoardColor={setBoardColor}
        boardColor={boardColor}
      />
    </div>
  )
}

export default Table;