import React from 'react'
import Adapter from './Adapter'


class Signup extends React.Component{

  constructor(props){
    super(props)
    this.state={
      username: "",
      password: "",

    }
  }

  handleChange =(e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    Adapter.signup(this.state.username, this.state.password).then(res => {this.props.handleLogin(res)
    this.props.history.push('/')}
    )
  }

  render(){
    const {username, password} = this.state
    return(
      <div>
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
              Signup
            </button>
          </form>
        </div>
        </div>

    )
  }

}

export default Signup
