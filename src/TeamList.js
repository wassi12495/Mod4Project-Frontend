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
      <Switch>
          <Route exact path='/teams' render = { () => {
              console.log("exact path /teams");
              return <div className="ui grid"> {team} </div>}
            }/>
      </Switch>

    </div>
  )
}


export default TeamList
