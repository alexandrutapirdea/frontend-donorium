import React, { Component } from 'react';
import './App.css';
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="redDiv">
              <Login/>
          </div>
            <img src={require('./donorium.png')} alt="Logo" id="logo"/>
        </header>
      </div>
    );
  }
}

export default App;
