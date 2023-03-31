// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', state: true, errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const user = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({errorMsg: data.error_msg})
      this.setState({state: false})
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {state, errorMsg} = this.state
    return (
      <div className="login">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-img"
          />
        </div>
        <div className="login-card">
          <div className="loginImage">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo"
            />
          </div>
          <form onSubmit={this.submitForm} className="form">
            <label htmlFor="username" className="username">
              USERNAME
            </label>
            <br />
            <input
              id="username"
              type="text"
              className="textBox"
              placeholder="Username"
              onChange={this.changeUsername}
            />
            <br />
            <label htmlFor="username" className="username">
              PASSWORD
            </label>
            <br />
            <input
              id="username"
              type="password"
              className="textBox"
              placeholder="Password"
              onChange={this.changePassword}
            />
            <br />
            <button type="submit" className="login-but">
              Login
            </button>
            {state ? '' : <p className="error-msg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
