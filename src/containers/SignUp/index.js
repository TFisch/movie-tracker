import React, { Component } from 'react';
import './style.css';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    //this is where we hook up our action for submiting a post to the backend.
    this.setState({userName: '', email: '', password: ''});
  }

  render() {
    const {userName, email, password} = this.state;
    return (
      <form className='user-login' onSubmit={this.handleSubmit}>
        <input name='userName' value={userName} onChange={this.handleChange}/>
        <input name='email' value={email} onChange={this.handleChange}/>
        <input name='password' value={password} onChange={this.handleChange}/>
        <button>SignUp</button>
      </form>
    );
  }
}
