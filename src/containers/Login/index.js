import React, { Component } from 'react';
import './style.css';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    //this is where we hook up our action for submiting a post to the backend.
    this.setState({userName: '', password: ''});
  }

  render() {
    const {userName, password} = this.state;
    return (
      <form className='user-login' onSubmit={this.handleSubmit}>
        <input name='userName' type='email' value={userName} onChange={this.handleChange}/>
        <input name='password' type='password' value={password} onChange={this.handleChange}/>
        <button>LogIn</button>
      </form>
    );
  }
}
