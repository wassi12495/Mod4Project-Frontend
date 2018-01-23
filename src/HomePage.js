import React, { Component } from 'react';




class HomePage extends Component {


  constructor(props){
    super(props)
    console.log(props);

    this.state = {
      leagueTables: []
    }

  }

  componentDidMount(){

  }

  render() {
    console.log(this.state);
    return (
      <div className="column">
        <div className="ui center aligned grid">
          Welcome
        </div>
      </div>
    );
  }
}

export default HomePage;
