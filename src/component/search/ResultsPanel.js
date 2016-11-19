import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../../redux/actions';
import { Link } from 'react-router';
import ResultsCards from './card/ResultsCards';
import { Col } from 'react-bootstrap';
import ResultsPanelStyles from './ResultsPanelStyles.less';

class ResultsPanel extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    ResultsPanelStyles.use();

  }

  componentWillUnmount() {
    ResultsPanelStyles.unuse();
  }


  renderResultCards(data) {
      return (
        <ResultsCards cards={data} />
      );
  }

  render() {
    return (
      <Col md={12} lg={6} className="requested-bounties">
        <div className="card">
          <div className="card-heading deep-purple">
            <h2>Requests</h2>
          </div>
        </div>
        {this.renderResultCards(this.props.search.data)}
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
})

// Connect Test with state using mapStatetoProps
export default connect(mapStateToProps, Actions)(ResultsPanel);

ResultsPanel.propTypes = {
  search: PropTypes.object,
};
