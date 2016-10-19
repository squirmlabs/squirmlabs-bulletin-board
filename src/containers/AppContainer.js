import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppContent from './AppContent';
import * as Actions from '../redux/actions';

class AppContainer extends Component {

  static propTypes = {
    results: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }
  render() {
    const {
      results,
      actions
    } = this.props;

    return (
      <AppContent actions={actions} results={results}>
        {this.props.children}
      </AppContent>
    );
  }
}
export default connect(
  state => ({
    results: state.results,
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)(AppContainer)
