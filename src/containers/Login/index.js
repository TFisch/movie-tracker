import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css';
import { login } from '../../api/apiCalls'
import { setActiveUser } from "../../actions"

export class Login extends Component {
  constructor(props) {
    super(props);
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
    const user = await login(this.state);
    this.props.setActiveUser(user);
    this.setState({ userName: '', password: '' });
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


const mapDispatchToProps = (dispatch) => ({
  setActiveUser: (user) => dispatch(setActiveUser(user))
})

export default connect(null, mapDispatchToProps)(Login)