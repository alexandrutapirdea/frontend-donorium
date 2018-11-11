import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="background">
              <Login/>
          </div>
            <img src={require('./res/images/donorium.png')} alt="Logo" id="logo"/>
        </header>
      </div>
    );
  }
}

export default App;
