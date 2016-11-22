import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions';
import { Link } from 'react-router'
import { Button, IconButton } from 'react-toolbox/lib/button';
import AppBarStyles from './AppBar.less';

class AppBar extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    AppBarStyles.use();
  }
  componentWillUnmount() {
    AppBarStyles.unuse();
  }
  render() {
    return (
      // <div className="navbar no-radius yellow-700">
      <div className="navbar no-radius indigo-600">
        <div className="navbar-item pull-left h4">Bulletin Board</div>
        <div className="text-xs-right navbar-item pull-right">
          <Link to="/posts/new">
            <Button icon='add' floating accent mini className="md-btn-add"/>
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

