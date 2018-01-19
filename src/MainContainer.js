import React from 'react'
import FixtureList from './FixtureList'
import LeagueTable from './LeagueTable'
import Adapter from './Adapter'
import TeamList from './TeamList'


export default class MainContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      fixtures: [],
      leagueTable:[],
      leagueInfo:[],
      teams:[]
    }
  }

  componentDidMount(){

    Adapter.getTeams()
    .then(leagues => leagues.map(league => {
      this.setState({
        teams: league.teams
      })
    }))

    Adapter.getLeagueTable()
    .then(data => this.setState({
      leagueTable: data
    }))

  }



  render(){
    console.log("Current state in MainContainer", this.state);

    return(
      
      <div className="ui grid container">
        <TeamList teams={this.state.teams} />
        <LeagueTable leagueTable={this.state.leagueTable}/>
        <FixtureList fixtures={this.state.fixtures}/>
      </div>
    )
  }






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
