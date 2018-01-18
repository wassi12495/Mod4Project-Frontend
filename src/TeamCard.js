import React from 'react'


const TeamCard = ({team, key}) =>{
  return(
    <div className="item">
      <div id={key} className="ui small image">
        <img src={team.img}/>
      </div>
      <div className="content">
        <p> {team.name}</p>
      </div>
    </div>
  ) 

}

export default TeamCard
