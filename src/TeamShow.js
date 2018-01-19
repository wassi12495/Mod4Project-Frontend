import React from 'react'

const TeamShow = ({team}) => {
  console.log(team);

  return (
    <div>
      

      <h1>{team.name}</h1>
      <h3>({team.wins}-{team.draws}-{team.losses})</h3>
      <img src={team.img}/>

    </div>
  )


}

export default TeamShow
