import React, { Component, PropTypes } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/index';
import $ from 'jquery';

import Posts from '../posts/Posts';

import BoardStyles from './BoardStyles.less';


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isResolved: false,
      postResults: '',
    }
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentWillMount() {
    this.props.requestPosts();
  }

  componentDidMount() {
    BoardStyles.use();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isResolved: true,
      postResults: nextProps.posts,
    })
  }

  shouldComponentUpdate(nextProps) {
    return true;
  }

  componentWillUnmount() {
    BoardStyles.unuse();
  }

  isEmpty() {
    return (
      <Row>
        <Col md={12} lg={12} className="no-padding">
          Add your first Note.
        </Col>
      </Row>
    );
  }

  isLoading() {
    return (
      <Row>
        <Col md={12} lg={12} className="no-padding">
          Loading.....
        </Col>
      </Row>
    );
  }

  display(status, data) {
    const views = {
      'default': this.isEmpty,
      'loading': this.isLoading,
    };
    return views[status](data);
  }

  renderPosts(data) {
    return (
      <Posts posts={data} />
    );
  }

  render() {
    let display = '';
    if (!this.state.postResults || this.props.posts.length <= 0) {
      display = this.display('default');
      return display;
    } else if (!this.state.isResolved) {
      display = this.display('loading')
      return display;
    }
    return (
      <Row className="board">
        <Col md={12} lg={12} className="no-padding">
          {this.renderPosts(this.props.posts)}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, Actions)(Board);

Board.propTypes = {
  requestPosts: PropTypes.func,
};
