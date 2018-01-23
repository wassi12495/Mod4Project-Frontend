class Adapter {



  static getFixtures(leagues){
    console.log("Leagues",leagues);
    return leagues.map(league => {
      fetch(`http://api.football-data.org/v1/competitions/${league.api_id}/fixtures`, {
       headers:  { 'X-Auth-Token': '4a9ace89a355471280f93cb35479661b' },
       type: 'GET',
       datatype: 'json'
     }).then(resp=>resp.json())
     .then(console.log)
   })
  }



  static getTeams(){
    return fetch( "http://localhost:3000/api/v1/teams",{
      headers:{
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    })
    .then(resp=>resp.json())
  }

  static getLeagueTable(leagues){
    return leagues.map(league => {
        fetch(`http://api.football-data.org/v1/competitions/${league.api_id}/leagueTable`,{
          headers:  { 'X-Auth-Token': '4a9ace89a355471280f93cb35479661b' },
          type: 'GET',
          datatype: 'json'
        })
        .then(resp=>resp.json())
        .then(console.log)
        // if this.state.teams
    })
  }

  // This Fetch will not Work
  static getLeagues(){
    return fetch( "http://localhost:3000/api/v1/leagues",{
      headers:{
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    })
    .then(resp=>resp.json())
  }

  static login(username, password){
    return fetch("http://localhost:3000/api/v1/users", {
      method: 'POST',
      headers:{
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    }).then(resp => resp.json())
  }



}
export default Adapter
