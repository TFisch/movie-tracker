import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setActiveUser } from "../../actions";
import { login } from '../../api/apiCalls';
import './style.css';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
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
    const user = await login(this.state);
    this.props.setActiveUser(user);
    this.setState({ userName: '', password: '' });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className='user-login' onSubmit={this.handleSubmit}>
        <input 
          name='email' 
          placeholder='email' 
          type='email' 
          value={email} 
          onChange={this.handleChange} 
        />
        <input 
          name='password' 
          placeholder='password' 
          type='password' 
          value={password} 
          onChange={this.handleChange} 
        />
        <button>LogIn</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setActiveUser: (user) => dispatch(setActiveUser(user))
});

Login.propTypes = {
  setActiveUser: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Login);
