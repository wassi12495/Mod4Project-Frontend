class Adapter {

  static fixtureRequest(){
    return fetch("http://api.football-data.org/v1/competitions/445/fixtures", {
      headers:  { 'X-Auth-Token': '3a013399d10f4c4b97456f63b52027de' },
      type: 'GET',
      datatype: 'json'
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

  // static getLeagueTable(){
  //   return fetch( "http://api.football-data.org/v1/competitions/445/leagueTable",{
  //     headers:  { 'X-Auth-Token': '3a013399d10f4c4b97456f63b52027de' },
  //     type: 'GET',
  //     datatype: 'json'
  //   })
  //   .then(resp=>resp.json())
  // }

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
