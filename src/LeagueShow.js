import React from 'react'

const imgStyle = {
  width: '250px',
  height: 'auto'
}

const LeagueShow = ({leagues,match}) => {
  console.log(leagues);
  console.log(match);
  const league = leagues.find(league => league.id === parseInt(match.params.id))
  console.log(league);

  return (
    <div>
        <h1>{league.name}</h1>

        <img style={imgStyle} src={league.img}/>
    </div>
  )


}

export default LeagueShow
