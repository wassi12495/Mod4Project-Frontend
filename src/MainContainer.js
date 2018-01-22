import React from 'react'
import FixtureList from './FixtureList'
import LeagueTable from './LeagueTable'
import Adapter from './Adapter'
import TeamList from './TeamList'
import NavBar from './NavBar'
import HomePage from './HomePage'
import TeamShow from './TeamShow'
import LeagueList from './LeagueList'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


export default class MainContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      fixtures: [],
      leagueTable:[],
      leagueInfo:[],
      teams:[],
      leagues: [],
    }
  }

  componentDidMount(){

    Adapter.getTeams()
    .then(teams => this.setState({
      teams: teams
    }))

    Adapter.getLeagueTable()
    .then(data => this.setState({
      leagueTable: data.standing
    }))

    Adapter.getLeagues()
    .then(leagues => this.setState({
      leagues: leagues
    }))

  }



  render(){
    // <Route exact path="/teams" render = {() => <TeamList teams={this.state.teams}/> }/>
    console.log("Current state in MainContainer", this.state);

    return(

      <div className="app">
          <Router>
            <div>
              <NavBar />
              <div className="ui grid container">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/teams" render = {() => <TeamList teams={this.state.teams}/> }/>
                <Route exact path="/leagues" render = {() => <LeagueList leagues={this.state.leagues}/> }/>
                <Route path="/teams/:id" render = {(props) => <TeamShow teams={this.state.teams} {...props}/>}/>
              </div>
          </div>

          </Router>
      </div>
    )
  }
  //
  // <TeamList teams={this.state.teams} />
  // <LeagueTable leagueTable={this.state.leagueTable}/>
  // <FixtureList fixtures={this.state.fixtures}/>
  //
  //


}




// componentDidMount(){
//   Adapter.fixtureRequest()
//   .then(resp => resp.json())
//   .then(data => this.setState(
//     {
//     fixtures: data.fixtures
//
//     }
//   ))
//
// }
