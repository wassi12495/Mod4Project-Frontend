import React from 'react'
import LeagueShow from './LeagueShow'
import {Link} from 'react-router-dom'

const imgStyle = {
  width: 'auto',
  height: '100px'
}

const LeagueCard = ({league, key, handleCLick}) =>{
// const leagueShow = league.map((league,index) => <LeagueShow league={league} key={index}/>)

  return(

    <div className="six wide container">
      <div id={league.id} className="ui card">
        <div  className="ui image">
          <img style={imgStyle} src={league.img}/>
        </div>
        <div className="content">
          <p> {league.name}</p>
          <div className="description">

          </div>
          <div className="extra content">
            <Link to={`/leagues/${league.id}`} className="item">
              <button onClick={() => handleCLick(league)} className="ui button">More Info
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

}

export default LeagueCard
