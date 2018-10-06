import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { resetTheStore } from '../../actions';
import './style.css';

export class NavBar extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  checkUserStatus = () => {
    if (localStorage.userObject) {
      console.log('hi')
    }
  }


  render() {
    this.checkUserStatus();
    return (
      <div className="button-wrap">
        <Link to='/login'><button className='login'>Login</button></Link>
        <Link to='/signup'><button className='signup'>SignUp</button></Link>
      </div>
    )
  }

}

// const { resetTheStore } = props;
// const { name } = tprops.user;
// const noLoggedInNav = () => (
//   <div className="button-wrap">
//     <Link to='/login'><button className='login'>Login</button></Link>
//     <Link to='/signup'><button className='signup'>SignUp</button></Link>
//   </div>
// );

// const loggedInNav = () => {
//   const userWelcome = name || '';
//   return (
//     <div className="nav-column">
//       <h1 className="welcome-text">{`Welcome! ${userWelcome}`}</h1>
//       <Link to={`/${name}/favorites`}>
//         <button className='favorites-button'>Favorites</button>
//       </Link>
//       <Link to='/'>
//         <button onClick={resetTheStore} className='logout-button'>Logout</button>
//       </Link>
//     </div>
//   );
// };

// const favoritesPage = () => {
//   const userWelcome = name || '';
//   return (
//     <div>
//       <h1 className="welcome-text">{`Welcome! ${userWelcome}`}</h1>
//       <Link to={`/${name}`}>
//         <button className='favorites-button'>Home</button>
//       </Link>
//       <Link to='/'>
//         <button onClick={resetTheStore} className='logout-button'>Logout</button>
//       </Link>
//     </div>
//   );
// };

// return (
//   <div className='nav-bar'>
//     <Route exact path='/' component={noLoggedInNav}></Route>
//     <Route exact path={`/${name}`} component={loggedInNav}></Route>
//     <Route exact path={`/${name}/favorites`} component={favoritesPage}></Route>
//   </div>
// );
// };

export const mapStateToProps = (state) => ({
  user: state.userData
});

export const mapDispatchToProps = (dispatch) => ({
  resetTheStore: () => dispatch(resetTheStore())
});

NavBar.propTypes = {
  user: PropTypes.object,
  resetTheStore: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
