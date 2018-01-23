import React from 'react'
import LeagueShow from './LeagueShow'
import {Link} from 'react-router-dom'

const imgStyle = {
  width: 'auto',
  height: '100px'
}

const LeagueCard = ({league}) =>{
// const leagueShow = league.map((league,index) => <LeagueShow league={league} key={index}/>)

  console.log(league);
  return(

    <div className="six wide container">
      <div id={league.id} className="ui card">
        <div  className="ui image">
          <img style={imgStyle} src={league.img}/>
        </div>
        <div className="content">
          <p> {league.name}</p>
          <div className="description">
            {league.fixtures.filter(fixture => fixture.status === "SCHEDULED")
            .slice(0,3)
            .map(fixture=> <ul>{fixture.home} vs. {fixture.away}<br/> {fixture.date}</ul>)}
          </div>
          <div className="extra content">
            <Link to={`/leagues/${league.id}`} className="item">
              <button className="ui button">More Info</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

}

export default LeagueCard
