import { Component } from "react";
import "./App.css";

class App extends Component {
constructor(){
  super();
 this.state = {
  date:new Date(),
  
  monsters:[]

 }
}


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(data=> data.json())
  .then(user=>{
    console.log(user)
    this.setState(()=>{
      return {monsters:user}
    })
  })
  setInterval(()=>{
    this.setState({date:new Date()})
  },1000)
}


  render(){
   const {date}=this.state

    return (
      <div className="App">
      <h1>{date.toLocaleTimeString()} </h1>

      <input type='search' className="search-box" placeholder="search monsters" onChange={(e)=>{
        console.log(e.target.value)

        const searchString = e.target.value.toLocaleLowerCase()

        const filterMonster = this.state.monsters.filter((monster)=>{
         return monster.name.toLocaleLowerCase().includes(searchString)
        });

        this.setState(()=>{
          return {monsters:filterMonster};
        })
      }}/>
        {
          this.state.monsters.map(monster=>{
            return<div className="card" key={monster.id}>
            <h1 key={monster.name}>{monster.name}  </h1>
            <span>{monster.username}</span>
            <h3>{monster.email}</h3>
            </div>
          })
        }

      </div>
    );
  }
 
}

export default App;
