import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <div class="ui top menu">
        <NavLink to="/" exact> Home </NavLink>
        <NavLink to="/soccer" exact> Soccer </NavLink>
        <NavLink to="/teams" exact> Teams </NavLink>
      </div>
    )
  }
}

export default NavBar;
