import React from 'react'
import LeagueTableCard from './LeagueTableCard'
import Adapter from './Adapter'

const LeagueTable = (props) =>{
  const leaguetable = props.leagueTable.map((lt,index) => <LeagueTableCard lt={lt} key={index}/>)

  return(

      <div>{leaguetable}</div>
  )

}

export default LeagueTable
