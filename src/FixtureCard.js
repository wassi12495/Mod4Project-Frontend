import React from 'react'


const FixtureCard = (props) =>{
  var dateFormat = require('dateformat');

  return(

    <div><h1>{dateFormat(props.fx.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</h1> <h1>{props.fx.awayTeamName}</h1> <h2>{props.fx.result.goalsAwayTeam}</h2>
      vs
    <h1>{props.fx.homeTeamName}</h1><h2>{props.fx.result.goalsHomeTeam}</h2>
    </div>
  )

}

export default FixtureCard
