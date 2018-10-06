import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { resetTheStore } from '../../actions';
import './style.css';

export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      activeUser: false,
      toggleListingsButton: false,
      toggleFavoritesButton: false,
      activeName: ''
    };
  }

  componentDidMount = () => {
    this.checkUserStatus();
  }

  checkUserStatus = () => {
    if (localStorage.userObject && !this.state.activeUser) {
      const nameFromStorage = JSON.parse(localStorage.userObject);
      const name = nameFromStorage.name;
      this.setState({ activeUser: true, activeName: name, toggleFavoritesButton: true });
    }
  }

  handleFavoriteRedirect = () => {
    this.setState({ toggleFavoritesButton: true, toggleListingsButton: false });
  }

  handleListingsRedirect = () => {
    this.setState({ toggleFavoritesButton: false, toggleListingsButton: true });
  }

  handleLogout = () => {
    resetTheStore();
    localStorage.clear();
  }


  render() {

    const userWelcome = this.state.activeName || '';
    const { activeUser, toggleFavoritesButton, toggleListingsButton } = this.state;
    return (
      <div>
        {activeUser === false &&
          <div className="button-wrap">
            <Link to='/login'><button className='login'>Login</button></Link>
            <Link to='/signup'><button className='signup'>SignUp</button></Link>
          </div>
        }
        {activeUser === true &&
          < div >
            <h1 className="welcome-text">{`Welcome! ${userWelcome}`}</h1>
            {toggleFavoritesButton === true &&
              <Link to={`/${this.state.activeName}/favorites`}>
                <button className='favorites-button' onClick={this.handleListingsRedirect}>Favorites</button>
              </Link>
            }
            {toggleListingsButton === true &&
              <Link to={`/${this.state.activeName}`}>
                <button className='favorites-button' onClick={this.handleFavoriteRedirect}>Movies</button>
              </Link>
            }
            <Link to='/'>
              <button onClick={this.handleLogout} className='logout-button'>Logout</button>
            </Link>
          </div>
        }

      </div>
    );
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
// <div>
//   <h1 className="welcome-text">{`Welcome! ${userWelcome}`}</h1>
/* <Link to={`/${name}`}>
  <button className='favorites-button'>Home</button>
</Link> */
//   <Link to='/'>
//     <button onClick={resetTheStore} className='logout-button'>Logout</button>
//   </Link>
// </div>
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
