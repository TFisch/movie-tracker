import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setActiveUser, setUserFavorites } from "../../actions";
import { login, getFavorites } from '../../api/apiCalls';
import { Redirect } from 'react-router-dom';
import './style.css';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
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
    const userFavorites = await getFavorites(user);
    this.props.setUserFavorites(userFavorites);
    const isLoggedIn = true;
    this.setState({ userName: '', password: '', isLoggedIn });
  }

  render() {
    if (this.state.isLoggedIn === true) {
      <Redirect to='/' />
    }
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
  setActiveUser: (user) => dispatch(setActiveUser(user)),
  setUserFavorites: (favorites) => dispatch(setUserFavorites(favorites))
});

Login.propTypes = {
  setActiveUser: PropTypes.func,
  setUserFavorites: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Login);
