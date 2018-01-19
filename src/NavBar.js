import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <div class="ui secondary menu">
        <NavLink to="/" exact> Home </NavLink>
        <NavLink to="/leagues" exact> Leagues </NavLink>
        <NavLink to="/teams" exact> Teams </NavLink>
      </div>
    )
  }
}

export default NavBar;
