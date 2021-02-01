import React, {useState} from 'react';

import Header from '../header';
import Toolbar from '../toolbar';
import Table from '../table';

import './app.css';
import './bootstrap-reboot.min.css';

const App = () => {

  const [data, setData] = useState([
    {
     label: 'Готово',
     tasks: [
       {
         name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nostrum labore mollitia soluta, impedit, expedita tenetur in quasi sed sunt amet aliquid dolor nihil natus sit magnam voluptatum, reiciendis iure.',
         id: 1232
       },
       {
         name: 'React',
         id: 213123
       },
       {
         name: 'App',
         id: 5789797
       }
     ],
     id: 1
    }
  ]);
  const [bgColorCol] = useState([
    {backgroundColor: 'rgb(0, 121, 191)'},
    {backgroundColor: 'rgb(210, 144, 52)'},
    {backgroundColor: 'rgb(115, 160, 47)'},
    {backgroundColor: 'rgb(176, 70, 50)'},
    {backgroundColor: 'rgb(0, 174, 204)'},
    {backgroundColor: 'rgb(205, 90, 145)'}
  ])
  const [activeMenu, setActiveMenu] = useState(false)
  const [boardColor, setBoardColor] = useState(null)

  const addNewCard = (label) => {
    const newCard = {
      label: label,
      tasks: [],
      id: Math.floor(Math.random() * 10000)
    };

    const newArr = [...data, newCard];

    setData(newArr);
  }

  const addNewTask = (textareaValue, id) => {
    const newTask = {
      name: textareaValue,
      id: Math.floor(Math.random() * 10000)
    }

    const index = data.findIndex(elem => elem.id === id);
    const old = data[index];
    const newItem = {...old, tasks: [...old.tasks, newTask]};

    const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    setData(newArr);
  }

  console.log(boardColor)

  return (
    <div 
      className='app green'
      style={boardColor}
    >
      <Header/>
      <Toolbar 
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
      />
      <Table 
        data={data}
        addNewCard={addNewCard}
        addNewTask={(textareaValue, id) => addNewTask(textareaValue, id)}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        bgColorCol={bgColorCol}
        boardColor={boardColor}
        setBoardColor={setBoardColor}
      />
    </div>
  )
}

export default App;