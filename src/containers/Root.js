import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Routes from '../routes';
import { Router, browserHistory } from 'react-router';

const bootstrapWebpack = require('bootstrap-webpack!./config/bootstrap.config.js');
// const fontawesome = require('font-awesome/css/font-awesome.css');

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={Routes} />
      </Provider>
    );
  }
}
