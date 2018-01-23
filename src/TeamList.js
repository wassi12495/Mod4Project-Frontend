import React from 'react'
import TeamCard from './TeamCard'
import TeamShow from './TeamShow'
import Adapter from './Adapter'
import { BrowserRouter as Router, Route, NavLink, Link, Switch, withRouter } from 'react-router-dom';



class TeamList extends React.Component{
  constructor(props){
    super(props)

    this.state={
      teams: []
    }
  }

  componentDidMount(){
    Adapter.getTeams()
    .then(teams => this.setState({
      teams: teams
    }))
  }



  render(){
    console.log(this.state);
    const team = this.state.teams.map((team,index) => <TeamCard team={team} key={index}/>)

    return(
      <div className="column">
        <Switch>
            <Route path='/teams/:id' render = {({match}) => {
              console.log(match.params);
              const team = this.state.teams.find(t=> t.id === parseInt(match.params.id))
              console.log("/teams Team", team);
              return team ? <TeamShow team={team}/> : <div>Loading...</div>
            }}/>
            <Route exact path='/teams' render = { () => {
                console.log("exact path /teams");
                return <div className="ui grid"> {team} </div>}
              }/>

        </Switch>

      </div>
    )
  }

}
// const TeamList = ({teams}) => {
//   const handleCLick = (team) =>{
//     console.log(team);
//
//
//   }
//   const team = teams.map((team,index) => <TeamCard handleCLick={handleCLick} team={team} key={index}/>)
//   const teamPage = teams.map((team,index) => <TeamShow team={team} key={index}/>)
//
//   return(
//     <div className="column">
//       <Switch>
//           <Route exact path='/teams' render = { () => {
//               console.log("exact path /teams");
//               return <div className="ui grid"> {team} </div>}
//             }/>
//       </Switch>
//
//     </div>
//   )
// }


export default TeamList
