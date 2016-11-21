import React, { Component, PropTypes } from 'react';
import _  from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from '../component/appbar/AppBar';
import * as Actions from '../redux/actions';
import appStyles from '../libs/css/app.less';


class AppContainer extends Component {
  componentDidMount() {
    appStyles.use();
  }

  componentWillUnmount() {
    appStyles.unuse();
  }

  render() {
    return (
      <div>
        <div id="content" className="app-content" role="main">
          <div className="box">
            <AppBar />
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
const mapStateToProps = (state) => ({
  posts: state.posts,
})

// Connect PostsIndex with state using mapStatetoProps
export default connect(mapStateToProps, Actions)(AppContainer);
