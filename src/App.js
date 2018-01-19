import React, { Component } from 'react';
import MainContainer from './MainContainer'
import NavBar from './NavBar'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
