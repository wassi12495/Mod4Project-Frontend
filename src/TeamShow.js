import React from 'react'

const imgStyle = {
  width: '250px',
  height: 'auto'
}

const TeamShow = ({teams,match}) => {
  console.log(teams);
  console.log(teamNew);
  console.log(match);
  const teamNew = teams.find(team => team.id === parseInt(match.params.id))
  return (
    <div>
        <h1>{teamNew.name}</h1>
        <h3>({teamNew.wins}-{teamNew.draws}-{teamNew.losses})</h3>
        <img style={imgStyle} src={teamNew.img}/>
    </div>
  )


}

export default TeamShow
