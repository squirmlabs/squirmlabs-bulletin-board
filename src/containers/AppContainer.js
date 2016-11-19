import React, { Component, PropTypes } from 'react';
import _  from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppContent from './AppContent';
import SearchResults from '../component/search/SearchResults';
import SearchBar from '../component/search/SearchBar';
import { instagramSearchTags, recieveSearchResults } from '../redux/actions';
// import appStyles from '../static/css/app.less';
import UserModal from '../component/user/modal/';
import ChatModal from '../component/chat/modal/';
import appStyles from '../libs/css/app.less';


class AppContainer extends Component {


  componentDidMount() {
    // bootstrapStyles.use();
    appStyles.use();
  }

  componentWillUnmount() {
    // bootstrapStyles.unuse();
    appStyles.unuse();
  }

  instagramTagSearch(term) {
    const { recieveSearchResults } = this.props;
    return _.debounce((term) => {
      this.props.fetchInstagramTags(term)
      .then(results => this.props.recieveSearchResults(results))
    }, 300);
  }

  render() {
    return (
      <div>
        <div id="content" className="app-content" role="main">
          <div className="box">
            <SearchBar onSearchTermChange={this.instagramTagSearch} />
            <div className="box-row">
              <div className="box-cell">
                <div className="box-inner padding">
                  <SearchResults />
                </div>
              </div>
            </div>
          </div>
        </div>
        <UserModal />
        <ChatModal />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  search: state.search,
})

// Connect PostsIndex with state using mapStatetoProps
export default connect(mapStateToProps, { instagramSearchTags, recieveSearchResults })(AppContainer);
