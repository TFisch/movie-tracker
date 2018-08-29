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

  handleSubmit = async (e) => {
    e.preventDefault();
    await login(this.state);
    // this.setState({ userName: '', password: '' });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className='user-login' onSubmit={this.handleSubmit}>
        <input name='email' placeholder='email' type='email' value={email} onChange={this.handleChange} />
        <input name='password' placeholder='password' type='password' value={password} onChange={this.handleChange} />
        <button>LogIn</button>
      </form>
    );
  }
}
