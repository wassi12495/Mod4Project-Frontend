import React from 'react'
import LeagueTableCard from './LeagueTableCard'
import Adapter from './Adapter'

const LeagueTable = (props) =>{
  const leaguetable = props.leagueTable.map((lt,index) => <LeagueTableCard lt={lt} key={index}/>)
  console.log(leaguetable[0]);
  return(
      <div className="eight wide column">
      <h1> League Table </h1>
      {leaguetable}
      </div>
  )

}

export default LeagueTable
