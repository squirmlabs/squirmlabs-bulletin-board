import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../../../redux/actions';
import { Accordion, Panel, Col} from 'react-bootstrap';
import { Link } from 'react-router';
import ResultsCards from '../cards/ResultsCards';
import RequestStyles from './styles.less';


class ResultsColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests:'',
      currentSearch:'',
    }

    this.fetchDetailsPanel = this.fetchDetailsPanel.bind(this);
  }
  componentWillMount() {
    this.props.fetchRequests()
      .then(requests => this.setState({ requests: requests.payload }));
    this.props.instagramSearchTags('diplo')
      .then(requests => this.setState({ currentSearch: requests.payload }));
  }
  componentWillUnmount() {
    RequestStyles.unuse();
  }
  componentDidMount() {
  }

  fetchDetailsPanel(data) {
    console.log('fetchDetailsPanel DATA', data)
  }

  fetchGamePanel(data) {
    console.log('fetchDetailsPanel DATA', data)
  }
  renderResultsCards(data) {
    return (
      <ResultsCards results={data} />
    );
  }

  render() {
    const { requests } = this.props;

    const requestsArray = Object.values(requests.all);

    const requestItems = requestsArray.map((request, i) => {
      return (
        <RequestItem request={request} key={i} />
      );
    });

    return (
      <div className="md-whiteframe-z0 bg-white">
        {requestItems}
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

export default connect(mapStateToProps, Actions)(ResultsColumn);

ResultsColumn.propTypes = {
  setTwitchToken: PropTypes.func,
  setInfluencer: PropTypes.func,
  setActivated: PropTypes.func,
  authenticated: PropTypes.func,
};

