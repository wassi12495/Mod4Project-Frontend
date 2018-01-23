import React from 'react'
import Adapter from './Adapter'


class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      username:"",
      password:"",
    }
  }

  handleChange =(e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.props);
    Adapter.login(this.state.username, this.state.password)

  }

  render(){
    const {username, password} = this.state
    return(

      <div className="ui form">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Username</label>
              <input
                name="username"
                placeholder="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="ui basic green button">
              Login
            </button>
          </form>
        </div>

    )
  }

}

export default Login
