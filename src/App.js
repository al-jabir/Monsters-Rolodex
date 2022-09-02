import { useState } from 'react';
import './App.css';
import Cardlist from './components/card-list/Cardlist';
import Searchbox from './components/search-box/Searchbox';

//functional

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => data.json())
    .then((user) => setMonsters(user));

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filterMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>

      <Searchbox
        className="monsters-search-box search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <Cardlist monsters={filterMonsters} />
    </div>
  );
};


export default App;
