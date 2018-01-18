class Adapter {

  static fixtureRequest(){
    return fetch("http://api.football-data.org/v1/competitions/445/fixtures", {
      headers:  { 'X-Auth-Token': '3a013399d10f4c4b97456f63b52027de' },
      type: 'GET',
      datatype: 'json'
    })
  }

  static leagueTableRequest(){
    return fetch("http://api.football-data.org/v1/competitions/445/leagueTable", {
      headers:  { 'X-Auth-Token': '3a013399d10f4c4b97456f63b52027de' },
      type: 'GET',
      datatype: 'json'
    })
  }



}
export default Adapter
