import React from 'react'

const imgStyle = {
  width: '250px',
  height: 'auto'
}

const TeamShow = ({team}) => {
  console.log(team);
  var dateFormat = require('dateformat');

  return (
    <div className="ui grid">
        <div className="six wide column">
          <h1>{team.name}</h1>
          <h3>({team.wins}-{team.draws}-{team.losses})</h3>
          <img style={imgStyle} alt="" src={team.img}/>
          <h2>Upcoming Matches</h2>
          <div>
            {team.fixtures.filter(fixture => fixture.status === "TIMED" || fixture.status === "SCHEDULED")
              .slice(0,10)
              .map(fixture=> <ul>{fixture.home} vs. {fixture.away}<br/> {dateFormat(fixture.date, "dddd, mmmm dS, yyyy, h:MM TT")}</ul>)}
          </div>
        </div>



      <div className="ten wide column">
        <h2> Fixtures </h2>
        <table className="ui celled striped padded table">
        <tbody>
        <div>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Date
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Home Team
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Away Team
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
            Score
            </h3>
          </th>

        </tr>
          {team.fixtures.reverse().filter(fixture => fixture.status === "FINISHED")
            .map(fixture=> <tr>
            <td>{dateFormat(fixture.date, "dddd, mmmm dS, yyyy, h:MM TT")}</td>
            <td>{fixture.home}</td>
            <td>{fixture.away}</td>
            <td>{fixture.home_score} - {fixture.away_score}</td>
            </tr>)}

        </div>
        </tbody>
      </table>
      </div>

    </div>
  )


}

// const TeamShow = ({teams,match}) => {
//   console.log(teams);
//   console.log(match);
//   const team = teams.find(team => team.id === parseInt(match.params.id))
//   console.log(team);
//
//   return (
//     <div>
//         <h1>{team.name}</h1>
//         <h3>({team.wins}-{team.draws}-{team.losses})</h3>
//         <img style={imgStyle} src={team.img}/>
//         <h3> Fixtures </h3>
//         <ul>
//           {team.fixtures.map(game =>
//             <li> {game.home} vs. {game.away} Score: {game.home_score}-{game.away_score}</li>
//           )}
//         </ul>
//     </div>
//   )
//
//
// }

export default TeamShow
