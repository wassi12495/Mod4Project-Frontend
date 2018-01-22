import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Link, Switch, withRouter } from 'react-router-dom';
import LeagueCard from './LeagueCard'
import LeagueShow from './LeagueShow'
import Adapter from './Adapter'


const LeagueList = ({leagues}) =>{
  console.log(leagues);
  const handleCLick = (league) =>{
    console.log(league);

  }
  Adapter.getFixtures(leagues)
  const league = leagues.map((league,index) => <LeagueCard league={league} handleCLick={handleCLick} key={index}/>)



  return(
    <div className="column">
    <Switch>
      <div>

        <Route exact path='/leagues' render = { () => {

            console.log("exact path /leagues");

            return <div className="ui grid">
              {league}
            </div>
          }

          }
        />


      </div>
    </Switch>

    </div>
  )



}

export default LeagueList
