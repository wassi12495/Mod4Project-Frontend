import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';


class NavBar extends Component {
  constructor(props){
    super(props)

  }
  render() {
    console.log("Nav", this.props.currentUser);
    const loggedIn = !!this.props.currentUser.id
    return (
      <div className="ui top inverted menu ">
        <div className="item">
          <img src="http://www.pngmart.com/files/1/2014-World-Cup-Soccer-Ball-PNG.png" />
        </div>
        <NavLink exact to="/"  className="item"> Home </NavLink>
        <NavLink exact to="/teams"  className="item"> Teams </NavLink>
        <NavLink exact to="/leagues"  className="item"> Leagues </NavLink>
        <div className="right menu">
          {loggedIn ?(
                <div className="item">
                  <div onClick={()=>{
                    this.props.handleLogout();
                    this.props.history.push('/');
                  }}>
                  Logout
                  </div>
                </div>
            ):(
              <NavLink exact to="/Login" className="item"> Login </NavLink>
            )

          }

        </div>

      </div>
    )
  }
}

export default withRouter(NavBar);
