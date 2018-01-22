import React from 'react'
import FixtureList from './FixtureList'
import LeagueTable from './LeagueTable'
import Adapter from './Adapter'
import TeamList from './TeamList'
import NavBar from './NavBar'
import HomePage from './HomePage'
import TeamShow from './TeamShow'
import LeagueShow from './LeagueShow'
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

    // Adapter.getLeagueTable()
    // .then(data => this.setState({
    //   leagueTable: data.standing
    // }))

    Adapter.getLeagues()
    .then(leagues => this.setState({
      leagues: leagues
    }))

  }



  render(){
    // <Route exact path="/teams" render = {() => <TeamList teams={this.state.teams}/> }/>
    console.log("Current state in MainContainer", this.state);
    var leagues = this.state.leagues
    var league_ids = []
    leagues.map(function(league) {
       league_ids.push(league.api_id)
    });

    console.log(league_ids);

    league_ids.map(id => {
      fetch(`http://api.football-data.org/v1/competitions/${id}/leagueTable`,{
        headers:  { 'X-Auth-Token': '3a013399d10f4c4b97456f63b52027de' },
        type: 'GET',
        datatype: 'json'
      })
      .then(resp=>resp.json())
      .then(console.log)
      // if this.state.teams

    })


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
                <Route path="/leagues/:id" render = {(props) => <LeagueShow  leagues={this.state.leagues} {...props}/>}/>
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
