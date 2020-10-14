import React, { Component } from 'react';
import './styles/App.css';
import './PokeList'
import PokeList from './PokeList';

class App extends Component {
  constructor () {
    super();
    this.state = {};

  }


//render retorna sintaxe jsx, que é JS + Html
  render() {
    return (
      <div className = "App">
      <PokeList>
      </PokeList>
    
      </div>
    );
  }

}

export default App;