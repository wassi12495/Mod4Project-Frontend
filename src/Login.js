import React from 'react'
import Adapter from './Adapter'


class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      username:"",
      password:"",
      error: false
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
    Adapter.login(this.state.username, this.state.password).then(res => {
      if (res.error){
        this.setState({error: true})
      }else{
        this.setState({error: false})
      console.log("the user is", res);

      }
    })

  }

  render(){
    const {username, password} = this.state
    return(
      <div>
      {this.state.error ? <h1> User Authentication Failed </h1> : null}
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
        </div>

    )
  }

}

export default Login
