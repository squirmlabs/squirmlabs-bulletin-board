import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions';
import { Link } from 'react-router'

class AppBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="navbar no-radius indigo">
        <div className="navbar-item pull-left h4">Bulletin Board</div>
        <div className="text-xs-right navbar-item pull-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add Post
          </Link>
        </div>
      </div>
    )
  }
}

function mapStatetoProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStatetoProps, Actions)(AppBar);

