import React, { Component } from 'react';
import Dashboard from  './Dashboard.js';
import Signup from './Signup.js';
var xhr = new XMLHttpRequest();


class Splash extends Component {

  render() {
    return (
      <div>
        <button
          className='btn-primary'
          onClick={
            this.props.login
          }
          // href = '/login'
          style = {{display: (this.props.splash) ? 'block' : 'none'}}
          type = 'button'>
          Log In
        </button>
        <button
          className = 'btn-primary'
          onClick = {this.props.signUpClick}
          style = {{display: (this.props.splash) ? 'block' : 'none'}}
          type = 'button'>
          Sign Up
        </button>
      </div>
    )
  }
}

// <input type='text' name='username' placeholder='Username'></input>
// <input type='password' name='password' placeholder='Password'></input>
// <button type='submit'>Sign In!</button>
// <button type='submit'>Sign Up!</button>

export default Splash;
