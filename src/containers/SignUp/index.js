import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signUp } from '../../api/apiCalls';
import { setActiveUser } from '../../actions';
import { Redirect, Link } from 'react-router-dom';
import './style.css';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      password: '',
      fireRedirect: false
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const initialUser = await signUp(this.state);
    const user = { user_id: initialUser.id, name: initialUser.name };
    this.props.setActiveUser(user);
    this.setState({ userName: '', email: '', password: '', fireRedirect: true });
  }

  render() {
    const { name } = this.props.user;
    const { userName, email, password, fireRedirect } = this.state;
    return (
      <div>
        <Link to='/login'>
          <button className="log-button input-field">Login</button>
        </Link>
        <Link to='/'>
          <button className="log-button input-field">Home</button>
        </Link>
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
          <button className="log-button input-field">Sign up</button>
        </form>
        {fireRedirect && (
          <Redirect to={`/${name}`}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userData
});

const mapDispatchToProps = (dispatch) => ({
  setActiveUser: (user) => dispatch(setActiveUser(user))
});

SignUp.propTypes = {
  user: PropTypes.object,
  setActiveUser: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
