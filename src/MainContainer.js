import React from 'react'
import Adapter from './Adapter'
import TeamList from './TeamList'
import NavBar from './NavBar'
import HomePage from './HomePage'
import LeagueList from './LeagueList'
import Login from './Login'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';


export default class MainContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser:{},
    }
  }

  handleLogin = (user) => {
    this.setState({currentUser: user})
  }

  render(){

    console.log("Current state in MainContainer", this.state);

    return(
      <div className="app">
        <NavBar
          currentUser={this.state.currentUser}
        />
        <div className="ui grid container">
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/teams" component={TeamList}/>
            <Route path="/leagues" component={LeagueList}/>
            <Route
              path="/login"
              render={props =>{
                return <Login {...props} handleLogin={this.handleLogin}/>
              }}
            />

          </Switch>
        </div>
      </div>


    )
  }

}
