import { useMemo } from 'react';
import { useState } from 'react';
import './App.css';

const fruits = [
  'laranja',
  'banana', 
  'maçã',
  'morango',
  'pera',
  'ácerola',
  'kiwi',
  'uva',
]

function App() {
  const [search, setSearch] = useState('');
  const filterFruits = useMemo(() => {
    const lowerSerach = search.toLowerCase();
    return fruits
      .filter(fruit => fruit
        .toLocaleLowerCase()
        .includes(lowerSerach)
      );
  }, [search]) 

  return (
    <div className="App">
      <h1>Hello Bravacoders</h1>
      <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
      <ul>
        {filterFruits.map((fruit) => <li key={fruit}>{fruit}</li>)}
      </ul>
    </div>
  );
}

export default App;
