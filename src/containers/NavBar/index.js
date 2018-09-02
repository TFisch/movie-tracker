import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { resetTheStore } from '../../actions';
import './style.css';

const NavBar = (props) => {
  const { resetTheStore } = props;
  const { name } = props.user;
  const noLoggedInNav = () => (
    <div>
      <Link to='/login'><button className='button'>Login</button></Link>
      <Link to='/signup'><button className='button'>SignUp</button></Link>
    </div>
  );

  const loggedInNav = () => (
    <div>
      <h1>{`Welcome! ${name}`}</h1>
      <Link to={`/${name}/favorites`}><button className='button'>Favorites</button></Link>
      <Link to='/'><button onClick={resetTheStore} className='button'>Logout</button></Link>
    </div>
  );

  return (
    <div className='nav-bar'>
      <Route exact path='/' component={noLoggedInNav}></Route>
      <Route path={`/${name}`} component={loggedInNav}></Route>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userData
});

const mapDispatchToProps = (dispatch) => ({
  resetTheStore: () => dispatch(resetTheStore())
});

NavBar.propTypes = {
  user: PropTypes.object,
  resetTheStore: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
