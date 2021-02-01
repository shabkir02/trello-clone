import React, {useState} from 'react';

import './table-menu.css';

const TableMenu = ({activeMenu, setActiveMenu, bgColorCol, setBoardColor, boardColor}) => {

  // const [color, setColor] = useState(null)
  const [colorMenuActive, setColorMenuActive] = useState(false)

  const toggleMenu = () => {
    setActiveMenu(false)
    setColorMenuActive(false)
  }

  const clazz = activeMenu ? ' active' : '';

  return (
    <div className={`menu${clazz}`}>
      <div className='menu__header'>
        {colorMenuActive && (
          <span 
            className="material-icons left"
            onClick={() => setColorMenuActive(false)}
          >
            arrow_back_ios
          </span>
        )}
        {colorMenuActive ? 'Сменить фон' : 'Меню'}
        <span 
          className="material-icons right"
          onClick={toggleMenu}
        >
          close
        </span>
      </div>
      <div className='menu__divider'></div>
      {!colorMenuActive && (
        <ul className='menu__wrapper'>
          <li 
            className='menu__item'
            onClick={() => setColorMenuActive(!colorMenuActive)}
          >
            <span className='menu__item-icon' style={boardColor}></span>
            <div>Сменить фон</div>
          </li>
        </ul>
      )}
      {colorMenuActive && (
        <div className='menu__wrapper'>
          {bgColorCol.map((item, i) => (
            <div 
              className='menu__color' 
              key={i}
            >
              <div 
                className='image' 
                style={item}
                onClick={() => setBoardColor(item)}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TableMenu;