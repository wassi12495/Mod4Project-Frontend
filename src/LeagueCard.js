import React from 'react'
import {Link} from 'react-router-dom'
import Adapter from './Adapter'

const imgStyle = {
  width: 'auto',
  height: '100px'
}

const LeagueCard = ({league,key, currentUser}) =>{
// const leagueShow = league.map((league,index) => <LeagueShow league={league} key={index}/>)
const loggedIn = !!currentUser.id
const handleClick =()=>{
  console.log(league.name, "clicked");
  Adapter.setFavoriteLeague(league)}
  


  console.log(league);
  return(

    <div className="six wide container">
      <div key={key} className="ui card">
        <div  className="ui image">
          <img alt="" style={imgStyle} src={league.img}/>
        </div>
        {loggedIn ? (
          <div onClick={handleClick}className="ui button"> Favorite </div>
        ):(null)}
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
