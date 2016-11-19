import React, { Component, PropTypes } from 'react';
import { Col, Row, Accordion, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/index';
import { Router, Route, Link, browserHistory } from 'react-router'
import ResultsPanel from './ResultsPanel';
import SearchResultsStyles from './SearchResultsStyles.less';

class SearchResults extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      isResolvedSearch: false,
      searchResults: '',
    }
  }
  componentWillMount() {
    console.log('CWM PROPS', this.props);
    this.props.fetchInstagramTags('diplo')
  }
  componentDidMount() {
    SearchResultsStyles.use();
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      isResolvedSearch: true,
      searchResults: nextProps.search.results,
    })
  }

  shouldComponentUpdate(nextProps) {
    return true;
  }

  componentWillUnmount() {
    SearchResultsStyles.unuse();
  }

  fetchSearchResults(data) {
    console.log('DATA', data)
    // const bounties = data.reduce((acc, value) => {
    //   return acc.concat(value.bounty_groups);
    // },[]);
    //
    // const requestedBounties = bounties.filter((groups) => {
    //   return groups.status === 'bounty_group_state_charged';
    // });
    //
    // // console.log('REQUESTEDBOUNTIES', requestedBounties)
    // return requestedBounties;
  }

  render() {
    if (!this.state.isResolvedSearch) {
      return (
        <Row>
          <Col md={12} lg={12} className="no-padding">
            Loading.....
          </Col>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col md={12} lg={12} className="no-padding">
            <ResultsPanel />
          </Col>
        </Row>

      );
    }
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
})

export default connect(mapStateToProps, Actions)(SearchResults);

SearchResults.propTypes = {
  search: PropTypes.object
};

