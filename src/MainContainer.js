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
import Login from './Login'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';


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

    Adapter.getLeagues()
    .then(leagues => this.setState({
      leagues: leagues
    }))

    // Adapter.getFixtures(this.state.leagues)
  }



  render(){

    console.log("Current state in MainContainer", this.state);

    return(
      <div className="app">
          <Router>
            <div>
              <NavBar />
              <div className="ui grid container">
                <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/teams" component={TeamList}/>
                  <Route path="/leagues" component={LeagueList}/>
                  <Route path="/login" component={Login}/>


                </Switch>
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
