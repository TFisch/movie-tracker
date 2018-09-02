import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signUp } from '../../api/apiCalls';
import { setActiveUser } from '../../actions';
import { Link } from 'react-router-dom';
import './style.css';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const user = await signUp(this.state);
    let toUserPage = true;
    this.props.setActiveUser(user);
    this.setState({ userName: '', email: '', password: '', toUserPage });
  }

  render() {

    const { userName, email, password } = this.state;
    return (
      <form className='user-login' onSubmit={this.handleSubmit}>
        <h2 className='log-header'>Sign Up</h2>
        <input
          className='input-field'
          name='userName'
          placeholder='username'
          value={userName}
          onChange={this.handleChange}
        />
        <input
          className='input-field'
          name='email'
          placeholder='email'
          type='email'
          value={email}
          onChange={this.handleChange}
        />
        <input
          className='input-field'
          name='password'
          placeholder='password'
          type='password'
          value={password}
          onChange={this.handleChange}
        />
        <Link to={`/user/`} >
          <button className="log-button input-field">Sign up</button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setActiveUser: (user) => dispatch(setActiveUser(user))
});

SignUp.propTypes = {
  setActiveUser: PropTypes.func
};

export default connect(null, mapDispatchToProps)(SignUp);
