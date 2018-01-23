import React from 'react'

const imgStyle = {
  width: '250px',
  height: 'auto'
}

const LeagueShow = ({league}) => {

  console.log(league);
  return (
    <div>
        <h1>{league.name}</h1>

        <img style={imgStyle} src={league.img}/>
    </div>
  )


}

export default LeagueShow
