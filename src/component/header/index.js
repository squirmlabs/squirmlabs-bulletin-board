import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions';
import SearchBar from '../search/SearchBar';

class AppHeader extends Component {
  render() {
    return (
      <nav className="navbar md-whiteframe-z1 no-radius">
        <SearchBar onSearchTermChange={instagramTagSearch} />
        <a className="navbar-item pull-left visible-xs visible-sm">
          <i className="mdi-navigation-menu i-24"></i>
        </a>
        <ul className="nav nav-sm nav navbar-nav navbar-tool">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/live">Live Panel</Link>
          </li>
          <li>
            <a>
              <i className="mdi-action-search i-24"></i>
            </a>
          </li>
          <li>
            <a data-toggle="modal" data-target="#user">
              <i className="material-icons">chat</i>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

// pass to connect
// get called with our app state
// return object with key authenticated.
function mapStatetoProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStatetoProps, Actions)(AppHeader);
