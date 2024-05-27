import './App.css';
import {useState} from 'react';
import {CharacterItems} from '../../types';
import Cell from '../../components/Cell/Cell';

const App = () => {
  const createItems = () => {
    const itemsArray: CharacterItems[] = [];
    for(let i = 0; i < 36; i++) {
      itemsArray.push({hasItem: false, clicked: false, id: Math.random().toString()});
    }
    const randomIndex = Math.floor(Math.random() * 36);
    itemsArray[randomIndex].hasItem = true;
    return itemsArray;
  };

  const [items, setItems] = useState(createItems());

  const changeCell = (id: string) => {
    setItems((prevState) => {
      return prevState.map((item) => {
        if(item.id == id) {
          return {...item, clicked: true};
        }

        return item;
      });
    });
  };

  return (
    <div>
      {items.map((item) => (
          <Cell key={item.id} onClick={() => changeCell(item.id)} onRing={item.hasItem} onChange={item.clicked}/>
        )
      )}
    </div>
  );
};


export default App;
