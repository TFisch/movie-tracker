import React, { Component } from 'react';
import './style.css';
import { login } from '../../api/apiCalls'

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
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    login(this.state);
    this.setState({ userName: '', password: '' });
  }

  render() {
    const { userName, password } = this.state;
    return (
      <form className='user-login' onSubmit={this.handleSubmit}>
        <input name='userName' type='email' value={userName} onChange={this.handleChange} />
        <input name='password' type='password' value={password} onChange={this.handleChange} />
        <button>LogIn</button>
      </form>
    );
  }
}
