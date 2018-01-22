import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <div className="ui top menu">
        <NavLink to="/" exact className="item"> Home </NavLink>
        <NavLink to="/soccer" exact className="item"> Soccer </NavLink>
        <NavLink to="/teams" exact className="item"> Teams </NavLink>
        <NavLink to="/leagues" exact className="item"> Leagues </NavLink>
      </div>
    )
  }
}

export default NavBar;
