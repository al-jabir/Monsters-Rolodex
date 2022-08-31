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

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       date: new Date(),

//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((data) => data.json())
//       .then((user) => {
//         this.setState(() => {
//           return { monsters: user };
//         });
//       });
//     setInterval(() => {
//       this.setState({ date: new Date() });
//     }, 1000);
//   }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { date } = this.state;
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filterMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1>{date.toLocaleTimeString()} </h1>
//         <h1 className="top">monster Rolodex</h1>
//         <Searchbox
//           onChangeHander={onSearchChange}
//           className="search-box of monsters"
//           placeholder="monsters search box"
//         />
//         <Cardlist monsters={filterMonster} />
//       </div>
//     );
//   }
// }

export default App;
