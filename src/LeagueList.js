import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LeagueCard from './LeagueCard'
import LeagueShow from './LeagueShow'
import Adapter from './Adapter'




class LeagueList extends React.Component{
  constructor(props){
    super(props)

    this.state={
      leagues: []
    }
  }

  componentDidMount(){
    Adapter.getLeagues()
    .then(leagues => this.setState({
      leagues: leagues
    }))
  }



  render(){
    console.log(this.state);
    const league = this.state.leagues.map((league,index) => <LeagueCard currentUser={this.props.currentUser} league={league} key={index}/>)

    return(
      <div className="column">
        <Switch>
            <Route path='/leagues/:id' render = {({match}) => {
              console.log(match.params);
              const league = this.state.leagues.find(t=> t.id === parseInt(match.params.id,10))
              console.log("/leagues League", league);
              return league ? <div className="four wide column"><LeagueShow league={league}/></div> : <div>Loading...</div>
            }}/>
            <Route exact path='/leagues' render = { () => {
                console.log("exact path /leagues");
                return <div className="ui grid"> {league} </div>}
              }/>

        </Switch>

      </div>
    )
  }

}


// const LeagueList = ({leagues}) =>{
//   console.log(leagues);
//   const handleCLick = (league) =>{
//     console.log(league);
//
//   }
//   // const fixtures = Adapter.getFixtures(leagues)
//   // console.log(fixtures);
//   const tables = Adapter.getLeagueTable(leagues)
//   console.log(tables);
//
//
//   const league = leagues.map((league,index) => <LeagueCard league={league} handleCLick={handleCLick} key={index}/>)
//
//
//
//   return(
//     <div className="column">
//     <Switch>
//       <div>
//
//         <Route exact path='/leagues' render = { () => {
//
//             console.log("exact path /leagues");
//
//             return <div className="ui grid">
//               {league}
//             </div>
//           }
//
//           }
//         />
//
//
//       </div>
//     </Switch>
//
//     </div>
//   )
//
//
//
// }

export default LeagueList
