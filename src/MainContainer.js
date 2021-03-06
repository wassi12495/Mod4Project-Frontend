import React from 'react'
import Adapter from './Adapter'
import TeamList from './TeamList'
import NavBar from './NavBar'
import HomePage from './HomePage'
import LeagueList from './LeagueList'
import Login from './Login'
import Signup from './Signup'
import {  Route,  Switch } from 'react-router-dom';
import './App.css'


export default class MainContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser:{},
    }
  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    if (token){
      Adapter.getCurrentUser().then(user =>{
        this.setState({
          currentUser: user
        })
      })

    }
  }
  updateUser = (user)=>{
    this.setState({
      currentUser: user
    })
  }

  handleLogin = (user) => {
    this.setState({currentUser: user})
    localStorage.setItem('token', user.id)
  }

  handleLogout = () => {
    this.setState({currentUser: {}})
    localStorage.removeItem('token')
  }


  render(){

    // console.log("Current state in MainContainer", this.state);

    return(
      <div className="app">
        <NavBar
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
      <div className="ui grid container">
          <Switch>
            <Route exact path="/" render={()=>{
                return <HomePage
                  updateUser={this.updateUser}
                  currentUser={this.state.currentUser}/>
            }}
            />
            <Route path="/teams" render={()=>{
              return <TeamList currentUser={this.state.currentUser}/>
            }}/>
            <Route path="/leagues" render={()=>{
              return <LeagueList currentUser={this.state.currentUser}/>
            }}/>
            <Route
              path="/login"
              render={props =>{
                return <Login
                        {...props}
                        handleLogin={this.handleLogin}
                        />
              }}
            />
            <Route
              path="/signup"
              render={props =>{
                return <Signup
                        {...props}
                        handleLogin={this.handleLogin}
                        />
              }}
            />

          </Switch>
        </div>
      </div>


    )
  }

}
