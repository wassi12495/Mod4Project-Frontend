import React from 'react'

const imgStyle = {
  width: '100px',
  height: '100px'
}

const TeamCard = ({team, key}) =>{
  return(

    <div className="six wide container">
      <div className="ui card">
        <div id={key} className="ui image">
          <img style={imgStyle} src={team.img}/>
        </div>
        <div className="content">
          <p> {team.name}</p>
          <div className="description">
            Position: {team.position} <br></br>
            Points: {team.points}
          </div>
          <div class="extra content">
            <button class="ui button">More Info</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default TeamCard
