import React, {Component} from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
constructor(props){
  super();

  this.state = {
    characters: []
  }
  this.getCharacters = this.getCharacters.bind(this)
}


  getCharacters() {
   const promise = axios.get("https://www.breakingbadapi.com/api/characters")
   promise.then(response => {
     console.log(response.data)
     this.setState({characters: response.data })
   })
  }
  
  
  render(){
    return (
      <div className="App">
      <h1>The Breaking Bad Api</h1>
      <button onClick={this.getCharacters}>Show Characters</button>
      {this.state.characters.map(character => (
        <div key={character.char_id}>
          <img src={character.img} style={{ maxWidth: "100px" }} />
          <h2>{character.name}</h2>
          <h3>{character.nickname}</h3>
        </div>
      ))}
    </div>
    );
  }
}

export default App;
