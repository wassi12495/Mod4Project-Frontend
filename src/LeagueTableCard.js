import React from 'react'


const LeagueTableCard = (props) =>{

  return(

    <div>
      <h1>{props.lt.position}.{props.lt.name} | Points {props.lt.points}</h1>
    </div>
  )

}

export default LeagueTableCard
