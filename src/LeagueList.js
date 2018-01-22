import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Link, Switch, withRouter } from 'react-router-dom';
import LeagueCard from './LeagueCard'


const LeagueList = ({leagues}) =>{
  console.log(leagues);
  const handleCLick = (league) =>{
    console.log(league);
    
  }

  const league = leagues.map((league,index) => <LeagueCard league={league} handleCLick={handleCLick} key={index}/>)



  return(
    <div className="column">
      <Router>
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
      </Router>

    </div>
  )



}

export default LeagueList
