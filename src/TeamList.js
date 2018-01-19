import React from 'react'
import TeamCard from './TeamCard'


const TeamList = ({teams}) => {
  const team = teams.map((team,index) => <TeamCard team={team} key={index}/>)
  return(
    <div className="column">
      <div className="ui grid">    
          {team}
      </div>
    </div>
  )
}


export default TeamList
