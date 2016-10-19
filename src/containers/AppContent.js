import React, { Component } from 'react';
// import model from './model';
import appStyles from '../static/css/app.less';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchVisible: null,
    };
  }

  componentDidMount() {
    appStyles.use();
  }

  componentWillUnmount() {
    appStyles.unuse();
  }

  render() {
    const { state } = this;

    return (
      <div>
        <div id="content" className="app-content" role="main">
          <div className="box">
            <div className="box-row">
              <div className="box-cell">
                <div className="box-inner padding">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

