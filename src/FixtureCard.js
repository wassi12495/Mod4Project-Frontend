import React from 'react'


const FixtureCard = (props) =>{

  return(

    <div><h1>{props.fx.awayTeamName}</h1> <h2>{props.fx.result.goalsAwayTeam}</h2>
      vs
    <h1>{props.fx.homeTeamName}</h1><h2>{props.fx.result.goalsHomeTeam}</h2>
    </div>
  )

}

export default FixtureCard
