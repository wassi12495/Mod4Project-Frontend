import React, { Component } from 'react';
import MainContainer from './MainContainer'
import NavBar from './NavBar'
import HomePage from './HomePage'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/soccer" component={MainContainer}/>

        </div>
      </Router>
    );
  }
}

export default App;
