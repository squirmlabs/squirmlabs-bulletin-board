import React, { Component, PropTypes } from 'react';
// import model from './model';

export default class AppContainer extends Component {
  static propTypes = {
    search: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isSearchVisible: null,
    };
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

