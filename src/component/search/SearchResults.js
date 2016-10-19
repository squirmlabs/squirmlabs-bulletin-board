import React, { Component, PropTypes } from 'react';
import { Col, Row, Accordion, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/index';
import { Router, Route, Link, browserHistory } from 'react-router'
import ResultCard from './card/ResultsCard';
import SearchResutsStyles from './SearchResutsStyles.less';

class SearchResults extends Component {
  componentWillMount() {
    this.props.instagramSearchTags('diplo');
    SearchResutsStyles.use();
  }
  componentWillUnmount() {
    SearchResutsStyles.unuse();
  }
  renderCard(cardData) {
    // Each entry in the list should include:
    // A thumbnail of the post (should link to actual post)
    // The username (with a link to user profile)
    // A list of hashtags
    // The caption
    // Number of likes
    const key = cardData.id;
    const createdDate = cardData.created_time;
    const profilePicture = cardData.profile_picture;
    const username = cardData.username;
    const captionDate = cardData.caption.created_time;
    const captionText = cardData.caption.text;
    const captionUsername = cardData.caption.from.username;
    const captionUserId = cardData.caption.from.id;
    const likeCount = cardData.likes.count;
    const atoms = {
      key,
      createdDate,
      profilePicture,
      username,
      captionDate,
      captionText,
      captionUsername,
      captionUserId,
      likeCount,
    }

    return (
      <div key={key}>
        <ResultCard {...atoms} />
      </div>
    );
  }

  render() {
    return (
      <div className="md-whiteframe-z0 bg-white">
        <div className="cards">
          Cards go here
          {this.props.results.map(this.renderCards)}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ results }) {
  return {
    results,
  };
}

export default connect(mapStateToProps, Actions)(SearchResults);

SearchResults.propTypes = {

};

