import React, { Component } from 'react';
import { Col, Row, Accordion, Panel } from 'react-bootstrap';
import { Link } from 'react-router';
import $ from 'jquery';
import PostStyles from './PostStyles.less';
import Draggable from 'react-draggable';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.style = {
      transform: 'rotate(' + this.randomBetween(-1, 1) + 'deg)'
    };
  }

  componentDidMount() {
    PostStyles.use();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (true);
  }

  componentWillUnmount() {
    PostStyles.unuse();
  }

  randomBetween(min, max) {
    return (min + Math.ceil(Math.random() * max));
  }

  render() {
    const { postResult } = this.props;
    return (
      <Draggable
        axis="both"
        handle=".handle"
        position={null}
        grid={[25, 25]}
        zIndex={100}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <Col sm={4} sm={4} md={3} lg={3}>
          <div className="note" style={this.style}>
            <div className="handle">{postResult.title}</div>
            <Link to={'posts/' + postResult.id}>
              <span className="pull-xs-right">{postResult.categories}</span>
            </Link>
          </div>
        </Col>
      </Draggable>

    );
  }
}

export default Post;
