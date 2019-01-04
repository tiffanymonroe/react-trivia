import React, { Component } from 'react';
import './App.css';

//import image
const logo = require("./logo.png")
class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="trivia"/>
        <button>Get Question</button>
      </div>
    );
  }
}

export default App;
