import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions';

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isVisible: true,
      isSearchVisible: false,
    };
  }
  render() {
    return (
      <ul className="nav nav-sm navbar-tool pull-right">
        <li>
          <a className="md-ink-ripple" onClick={this.props.toggleSearch}>
            <i className="mdi-action-search i-24"></i>
          </a>
        </li>
      </ul>
    )
  }
}

function mapStatetoProps(state) {
  return {
    authenticated: state.authenticated
  };
}

export default connect(mapStatetoProps, Actions)(Navbar);

