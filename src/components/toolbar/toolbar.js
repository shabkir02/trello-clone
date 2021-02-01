import React from 'react';

import './toolbar.css';

const Toolbar = ({setActiveMenu, activeMenu}) => {

  const hover = activeMenu ? {backgroundColor: ' rgba(255, 255, 255, .5)'} : null

  return (
    <div className='toolbar'>
      <div className='toolbar__left'>
        <div className='toolbar__item'>
          <span className="material-icons">
            clear_all
          </span>
          &nbsp;
          Доска
          &nbsp;
          <span className="material-icons ">
            expand_more
          </span>
        </div>
        <div className='toolbar__item'  spellCheck="false">
          название
        </div>
        <div className='toolbar__item'>
          <span className="material-icons">
            star_outline
          </span>
        </div>
      </div>
      <div className='toolbar__right'>
        <div className='toolbar__item'>
          <span className="material-icons">
            event_available
          </span>
          &nbsp;
          Календарь
        </div>
        <div 
          style={hover}
          className='toolbar__item'
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <span className="material-icons">
            more_horiz
          </span>
          &nbsp;
          Меню
        </div>
      </div>
    </div>
  )
}

export default Toolbar;