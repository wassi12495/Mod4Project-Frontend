import React, { Component } from 'react';
import MainContainer from './MainContainer'
import './App.css';


class App extends Component {
  render() {
    console.log("RENDERING", this.props);
    return (

        <div>
          <MainContainer />
        </div>
    );
  }
}

export default App;
