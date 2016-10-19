import React, { Component, PropTypes } from 'react';
import { Col, Row, Accordion, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/index';
import { Router, Route, Link, browserHistory } from 'react-router'
import Rx from 'rxjs';
import ResultsColumn from './results/column/ResultsColumn';
import bootstrapStyles from '../../libs/jquery/bootstrap/dist/css/bootstrap.less';
import appStyles from '../../libs/css/app.less';

class SearchResults extends Component {
  static propTypes = {
    games: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    // this.props.fetchEvent(event);
    // this.props.fetchGames();
    // this.props.fetchRequests();
  }
  componentDidMount() {
    bootstrapStyles.use();
    appStyles.use();
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({
    //
    // })
  }

  componentWillUnmount() {
    bootstrapStyles.unuse();
    appStyles.unuse();
  }

  handleSubmit(data) {
    // this.props.setTwitchToken(data.token);
    // this.props.setInfluencer(data.influencerName);
    // this.props.setActivated(data.isActivated);
    // this.props.authenticated(true);
  }

  handleViewRender() {
    // return <SearchForm handleSubmit={this.handleSubmit} />;
  }

  render() {
    return (
      <div className="md-whiteframe-z0 bg-white">
        <ResultsColumn />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: state.games,
    requests: state.requests,
    auth: state.auth,
  };
}

export default connect(mapStateToProps, Actions)(SearchResults);

SearchResults.propTypes = {
  setTwitchToken: PropTypes.func,
  setInfluencer: PropTypes.func,
  setActivated: PropTypes.func,
  authenticated: PropTypes.func,
};

