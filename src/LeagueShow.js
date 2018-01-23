import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'


const imgStyle = {
  width: '250px',
  height: 'auto'
}

const LeagueShow = ({league}) => {

  console.log("Currently in league show", league);
  return (
    <div className="ui grid">
      <div className="eight wide column">
        <h1>{league.name}</h1>
        <img style={imgStyle} src={league.img} alt=''/>
      </div>

      <div className="eight wide column">
        <h1 className="ui center aligned header">League Table</h1>
        <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Team Name
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Position
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Points
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Wins
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Losses
            </h3>
          </th>
        </tr>
        {league.teams.map(team => {
          return (
            <tr>
              <Link to={`/teams/${team.id}`} className="item">
                <td>{team.name}</td>

              </Link>
              <td>{team.position}</td>
              <td>{team.points}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
            </tr>
          )
        })}
      </tbody>
    </table>

      </div>
    </div>
  )


}

export default LeagueShow
