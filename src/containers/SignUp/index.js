import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signUp } from '../../api/apiCalls';
import { setActiveUser } from "../../actions";
import { Redirect } from react - router - dom;
import './style.css';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      password: '',
      toUserPage: false
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
    const toUserPage = true;
    this.props.setActiveUser(user);
    this.setState({ userName: '', email: '', password: '', toUserPage });
  }

  render() {
    if (this.state.toUserPage === true) {
      <Redirect to='/User' />
    }

    const { userName, email, password } = this.state;
    return (
      <form className='user-login' onSubmit={this.handleSubmit}>
        <input
          name='userName'
          placeholder='username'
          value={userName}
          onChange={this.handleChange}
        />
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
        <button>SignUp</button>
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
