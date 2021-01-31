import React from 'react';

import './table-menu.css';

const TableMenu = () => {

  return (
    <div className='menu'>
      <div className='menu__header'>
        Меню
        <span class="material-icons">
          close
        </span>
      </div>
      <div className='menu__divider'></div>
      <ul className='menu__wrapper'>
        <li className='menu__item'>
          <span className='menu__item-icon'></span>
          <div>Сменить фон</div>
        </li>
      </ul>
    </div>
  )
}

export default TableMenu;