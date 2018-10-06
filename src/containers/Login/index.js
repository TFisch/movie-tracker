import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setActiveUser, setUserFavorites, triggerLogin } from "../../actions";
import { login, getFavorites } from '../../api/apiCalls';
import { Redirect, Link } from 'react-router-dom';
import './style.css';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
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
    const { setActiveUser, setUserFavorites, triggerLogin } = this.props;
    const { email, password } = this.state;
    if (email.length && password.length) {
      const user = await login(this.state);
      const userFavorites = await getFavorites(user);
      setActiveUser(user);
      setUserFavorites(userFavorites);
      this.setState({ userName: '', password: '', fireRedirect: true });
      triggerLogin(true);
    } else {
      alert('Please complete login information');
    }
  }

  render() {
    const { name } = this.props.user;
    const { email, password, fireRedirect } = this.state;
    return (
      <div>
        <form className='user-login' onSubmit={this.handleSubmit}>
          <h2 className='log-header'>Log In</h2>
          <input
            className='email input-field'
            name='email'
            placeholder='email'
            type='email'
            value={email}
            onChange={this.handleChange}
          />
          <input
            className='password input-field'
            name='password'
            placeholder='password'
            type='password'
            value={password}
            onChange={this.handleChange}
          />
          <button className="log-button">Log In</button>
          <div className="button-wrap">
            <Link to='/signup'>
              <button className="redirect-signup">Need at account?</button>
            </Link>
            <Link to='/'>
              <button className="redirect-home">Home</button>
            </Link>
            {fireRedirect && (
              <Redirect to={`/${name}`} />
            )}
          </div>
        </form>

      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.userData
});

export const mapDispatchToProps = (dispatch) => ({
  setActiveUser: (user) => dispatch(setActiveUser(user)),
  setUserFavorites: (favorites) => dispatch(setUserFavorites(favorites)),
  triggerLogin: (status) => dispatch(triggerLogin(status))
});

Login.propTypes = {
  user: PropTypes.object,
  setActiveUser: PropTypes.func,
  setUserFavorites: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
