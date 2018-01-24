import React, { Component } from 'react';
import Adapter from './Adapter'
import {Link} from 'react-router-dom'



class HomePage extends Component {


  constructor(props){
    super(props)
    console.log("props",props);

    this.state = {
      leagueTables: [],
      leagues: [],
      teams: [],
      user: {}
    }

  }

  componentDidMount(){
    Adapter.getLeagues()
    .then(leagues => this.setState({
      leagues: leagues
    }))
    Adapter.getTeams()
    .then(teams => this.setState({
      teams: teams
    }))
    Adapter.getCurrentUser()
    .then(user => this.setState({
      user: user
    }))

  }

  render() {
    const imgStyle = {
      width: 'auto',
      height: '100px'
    }
    console.log("state in render",this.state);
    console.log("premier league", this.state.leagues)
    console.log("teams", this.state.teams);
    const loggedIn = !!this.props.currentUser.id
    return (
      <div className="column">

        {loggedIn ? (
          <div className="ui grid">
            <div className="four wide column">
              <h1 className="ui center aligned header">Top Leagues</h1>
                {this.state.leagues.filter(league =>
                  league.id === 1 || league.id === 4 || league.id === 5).map(league =>
                    <Link to={`/leagues/${league.id}`} className="item">
                      <div className="ui card">
                      <div  className="ui image">
                        <img alt="" style={imgStyle} src={league.img}/>
                      </div>
                      <div className="content">
                        <p> {league.name}</p>
                      </div>
                      </div>
                  </Link>
                )}
            </div>
            <div className="four wide column">
              <h1 className="ui center aligned header">Top Teams</h1>
                {this.state.teams.filter(team =>
                  team.position === 1).map(team =>
                    <Link to={`/teams/${team.id}`} className="item">
                      <div className="ui card">
                      <div  className="ui image">
                        <img alt="" style={imgStyle} src={team.img}/>
                      </div>
                      <div className="content">
                        <p> {team.name}</p>
                      </div>
                      </div>
                  </Link>
                )}
            </div>
            <div className="eight wide column"> <h1 className="ui center aligned header">Favorites</h1>
                {this.state.user.leagues ? (this.state.user.leagues.map(league=>{
                  console.log(league)
                  return(<Link to={`/leagues/${league.id}`} className="item">
                    <div className="ui card">
                    <div  className="ui image">
                      <img alt="" style={imgStyle} src={league.img}/>
                    </div>
                    <div className="content">
                      <p> {league.name}</p>
                    </div>
                    </div>
                </Link>)
              })):(null)}
                {this.state.user.teams ? (this.state.user.teams.map(team=>{
                  return (<Link to={`/teams/${team.id}`} className="item">
                    <div className="ui card">
                    <div  className="ui image">
                      <img alt="" style={imgStyle} src={team.img}/>
                    </div>
                    <div className="content">
                      <p> {team.name}</p>
                    </div>
                    </div>
                </Link>)
              })):(null)}
        </div>
          </div>
        ):(
          <div className="ui grid">
            <div className="eight wide column">
              <h1>Top Leagues</h1>
                {this.state.leagues.filter(league =>
                  league.id === 1 || league.id === 4 || league.id === 5).map(league =>
                    <Link to={`/leagues/${league.id}`} className="item">
                      <div className="ui card">
                      <div  className="ui image">
                        <img alt="" style={imgStyle} src={league.img}/>
                      </div>
                      <div className="content">
                        <p> {league.name}</p>
                      </div>
                      </div>
                  </Link>
                )}
            </div>
            <div className="eight wide column">
              <h1>Top Teams</h1>
                {this.state.teams.filter(team =>
                  team.position === 1).map(team =>
                    <Link to={`/teams/${team.id}`} className="item">
                      <div className="ui card">
                      <div  className="ui image">
                        <img alt="" style={imgStyle} src={team.img}/>
                      </div>
                      <div className="content">
                        <p> {team.name}</p>
                      </div>
                      </div>
                  </Link>
                )}
            </div>
          </div>
      )}
      </div>

    )
  }
}
export default HomePage;
