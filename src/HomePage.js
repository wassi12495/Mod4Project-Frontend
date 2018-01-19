import React, { Component } from 'react';
import MainContainer from './MainContainer'
import NavBar from './NavBar'
import './App.css';


class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="bg"> </div>
        <div className="ui center aligned grid">
          Welcome
        </div>
      </div>
    );
  }
}

export default HomePage;
