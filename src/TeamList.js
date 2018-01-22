import React from 'react'
import TeamCard from './TeamCard'
import TeamShow from './TeamShow'
import { BrowserRouter as Router, Route, NavLink, Link, Switch, withRouter } from 'react-router-dom';


const TeamList = ({teams}) => {
  const handleCLick = (team) =>{
    console.log(team);
  }
  const team = teams.map((team,index) => <TeamCard handleCLick={handleCLick} team={team} key={index}/>)
  const teamPage = teams.map((team,index) => <TeamShow team={team} key={index}/>)

  return(
    <div className="column">
      <Router>
        <div>
          <Route exact path='/teams' render = { () =>

              <div className="ui grid">
                {team}
              </div>

            }
          />
        <Route path={`/teams/:id`} render = {(props) =>
              <TeamShow teams = {teams} {...props}/>
          }
        />

        </div>
      </Router>

    </div>
  )
}


export default TeamList
