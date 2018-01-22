class Adapter {



  static getFixtures(leagues){
    console.log("Leagues",leagues);
    return leagues.map(league => {
      fetch(`http://api.football-data.org/v1/competitions/${league.api_id}/fixtures`, {
       headers:  { 'X-Auth-Token': '4a9ace89a355471280f93cb35479661b' },
       type: 'GET',
       datatype: 'json'
     }).then(resp=>resp.json())
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

  static getLeagueTable(){
    return fetch( "http://api.football-data.org/v1/competitions/445/leagueTable",{
      headers:  { 'X-Auth-Token': '3a013399d10f4c4b97456f63b52027de' },
      type: 'GET',
      datatype: 'json'
    })
    .then(resp=>resp.json())
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



}
export default Adapter
