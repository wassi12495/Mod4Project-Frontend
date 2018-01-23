import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <div className="ui inverted top menu ">
        <div className="item">
          <img src="http://www.pngmart.com/files/1/2014-World-Cup-Soccer-Ball-PNG.png" />
        </div>
        <NavLink exact to="/"  className="item"> Home </NavLink>
        <NavLink exact to="/Login" className="item"> Login </NavLink>
        <NavLink exact to="/teams"  className="item"> Teams </NavLink>
        <NavLink exact to="/leagues"  className="item"> Leagues </NavLink>
      </div>
    )
  }
}

export default withRouter(NavBar);
