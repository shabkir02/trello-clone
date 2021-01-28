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
    },
    
    {
     label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nostrum labore m',
     tasks: [
        {
          name: 'Vue.js',
          id: 5435345
        },
        {
         name: 'React',
         id: 98798
        },
        {
         name: 'App',
         id: 989890
        },
        {
         name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nostrum labore mollitia soluta, impedit, expedita tenetur in quasi sed sunt amet aliquid dolor nihil natus sit magnam voluptatum, reiciendis iure.',
         id: 54353
        },
        {
          name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nostrum labore mollitia soluta, impedit, expedita tenetur in quasi sed sunt amet aliquid dolor nihil natus sit magnam voluptatum, reiciendis iure.',
          id: 76454357677
         },
         {
          name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nostrum labore mollitia soluta, impedit, expedita tenetur in quasi sed sunt amet aliquid dolor nihil natus sit magnam voluptatum, reiciendis iure.',
          id: 76743677
         },
         {
          name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nostrum labore mollitia soluta, impedit, expedita tenetur in quasi sed sunt amet aliquid dolor nihil natus sit magnam voluptatum, reiciendis iure.',
          id: 767312677
         }
     ],
     id: 2
    }
   ])

   const addNewCard = (label) => {
    const newCard = {
      label: label,
      tasks: [],
      id: Math.floor(Math.random() * 10000)
    };

    const newArr = [...data, newCard];

    setData(newArr);
   }

  return (
    <div className='app green'>
      <Header/>
      <Toolbar/>
      <Table 
        data={data}
        addNewCard={addNewCard}
      />
    </div>
  )
}

export default App;