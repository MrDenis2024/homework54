import './App.css';
import {useState} from 'react';
import {CharacterItems} from '../../types';
import CellBoard from '../../components/CellBoard/CellBoard';
import Counter from '../../components/Counter/Counter';
import ResetGame from '../../components/ResetGame/ResetGame';

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
        if(item.id === id) {
          return {...item, clicked: true};
        }

        return item;
      });
    });
  };

  const resetGame = () => {
    setItems(createItems());
  };

  return (
    <div>
      <CellBoard changeCell={changeCell} items={items} />
      <Counter items={items} />
      <ResetGame  onClick={resetGame}/>
    </div>
  );
};


export default App;
