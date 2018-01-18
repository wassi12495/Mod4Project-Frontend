import React from 'react'


const LeagueTableCard = (props) =>{

  return(

    <div>
      <h1>{props.lt.position}.{props.lt.teamName} | Points {props.lt.points}</h1>
    </div>
  )

}

export default LeagueTableCard
