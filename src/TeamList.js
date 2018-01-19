import React from 'react'
import TeamCard from './TeamCard'


const TeamList = ({teams}) => {
  const team = teams.map((team,index) => <TeamCard team={team} key={index}/>)
  return(
    <div className="eight wide column">
      <div className="ui relaxed items">
        {team}
      </div>
    </div>
  )
}


export default TeamList
