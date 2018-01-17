import React from 'react'
import FixtureList from './FixtureList'


export default class MainContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      fixtures: []
    }
  }

  componentDidMount(){
    fetch(`https://api.football-data.org/v1/fixtures`, {
      headers:  { 'X-Auth-Token': '3a013399d10f4c4b97456f63b52027de' },
      type: 'GET',
      datatype: 'json',
    })
    .then(resp => resp.json())
    .then(data => this.setState(
      {
      fixtures: data.fixtures,
      // searchTerm: transactions.description
      //in here I will create a search for description for a certain word that happens onChange
      // I have to filter through the description string
      }
  ))
  }

  render(){

    console.log("Current state in MainContainer", this.state);

    return(
      <div><FixtureList fixtures={this.state.fixtures}/></div>
    )
  }






}
