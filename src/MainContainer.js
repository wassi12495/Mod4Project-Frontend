import React from 'react'
import FixtureList from './FixtureList'
import LeagueTable from './LeagueTable'
import Adapter from './Adapter'


export default class MainContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      fixtures: [],
      leagueTable:[]
    }
  }

  componentDidMount(){
    Adapter.fixtureRequest()
    .then(resp => resp.json())
    .then(data => this.setState(
      {
      fixtures: data.fixtures

      }
    ))

    Adapter.leagueTableRequest()
    .then(resp => resp.json())
    .then(data => this.setState(
      {
      leagueTable: data.standing

      }
    ))
  }

  render(){
    console.log("Current state in MainContainer", this.state);

    return(
      <div>
        <LeagueTable leagueTable={this.state.leagueTable}/>
        <FixtureList fixtures={this.state.fixtures}/>
      </div>
    )
  }






}
