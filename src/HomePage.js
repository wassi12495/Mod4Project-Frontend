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
    const loggedIn = !!this.props.currentUser.id
    return (
      <div className="column">
        <div className="ui center aligned grid">
          Welcome
        </div>
        {loggedIn ? (
          <h1> Logged in </h1>
        ):(
          null
        )}
      </div>

    );
  }
}

export default HomePage;
