import React from 'react'
import TeamShow from './TeamShow'
import {Link} from 'react-router-dom'

const imgStyle = {
  width: '100px',
  height: '100px'
}

const TeamCard = ({team, handleCLick}) =>{
  // const teamShow = team.map((team,index) => <TeamShow team={team} key={index}/>)

  return(

    <div className="six wide container">
      <div id={team.id} className="ui card">
        <div  className="ui image">
          <img style={imgStyle} src={team.img}/>
        </div>
        <div className="content">
          <p> {team.name}</p>
          <div className="description">
            Position: {team.position} <br></br>
            Points: {team.points}
          </div>
          <div className="extra content">
            <Link to={`/teams/${team.id}`} className="item">
              <button  className="ui button" handleCLick={handleCLick}>More Info
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

}

export default TeamCard
