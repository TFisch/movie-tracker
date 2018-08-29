import React, { Component } from 'react';
import './style.css';
import { signUp } from '../../api/apiCalls';

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
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await signUp(this.state);
    this.setState({ userName: '', email: '', password: '' });
  }

  render() {
    const { userName, email, password } = this.state;
    return (
      <form className='user-login' onSubmit={this.handleSubmit}>
        <input name='userName' placeholder='username' value={userName} onChange={this.handleChange} />
        <input name='email' placeholder='email' value={email} onChange={this.handleChange} />
        <input name='password' placeholder='password' value={password} onChange={this.handleChange} />
        <button>SignUp</button>
      </form>
    );
  }
}
