import React, { Component } from 'react';
import MainContainer from './MainContainer'
import NavBar from './NavBar'
import Adapter from './Adapter'
import './App.css';


class HomePage extends Component {


  constructor(props){
    super(props)
    console.log(props);

    this.state = {
      leagueTables: []
    }

  }

  componentDidMount(){

    // this.setState({
    //   leagueTables: Adapter.getLeagueTable(this.props.leagues)
    // })

    // console.log("home page mount", this.state.leagueTables);


  }

  render() {
    console.log(this.state);
    return (
      <div className="column">
        <div className="ui center aligned grid">
          Welcome
        </div>
      </div>
    );
  }
}

export default HomePage;
