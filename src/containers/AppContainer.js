import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppContent from './AppContent';
import * as Actions from '../redux/actions';
import bootstrapStyles from '../libs/jquery/bootstrap/dist/css/bootstrap.less';
import appStyles from '../static/css/app.less';
// import appStyles from '../../libs/css/app.less';


class AppContainer extends Component {

  static propTypes = {
    results: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentDidMount() {
    bootstrapStyles.use();
    appStyles.use();
  }

  componentWillUnmount() {
    bootstrapStyles.unuse();
    appStyles.unuse();
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
