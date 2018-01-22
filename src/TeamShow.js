import React from 'react'

const imgStyle = {
  width: '250px',
  height: 'auto'
}

const TeamShow = ({teams,match}) => {
  console.log(teams);
  console.log(match);
  const team = teams.find(team => team.id === parseInt(match.params.id))
  console.log(team);

  return (
    <div>
        <h1>{team.name}</h1>
        <h3>({team.wins}-{team.draws}-{team.losses})</h3>
        <img style={imgStyle} src={team.img}/>
        <h3> Fixtures </h3>
        <ul>
          {team.fixtures.map(game =>
            <li> {game.home} vs. {game.away} Score: {game.home_score}-{game.away_score}</li>
          )}
        </ul>
    </div>
  )


}

export default TeamShow
