import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Row, Accordion, Panel } from 'react-bootstrap';
import { Link } from 'react-router';
import $ from 'jquery';
import PostStyles from './PostStyles.less';
import Draggable from 'react-draggable';
import FlipCard from '../flipcard/FlipCard';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    }

    this.showBack = this.showBack.bind(this);
    this.showFront = this.showFront.bind(this);
    this.handleOnFlip = this.handleOnFlip.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    this.style = {
      transform: 'rotate(' + this.randomBetween(-1, 1) + 'deg)'
    };
  }

  componentDidMount() {
    window.jQuery = window.$ = $;
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

  showBack() {
    this.setState({
      isFlipped: true
    });
  }

  showFront() {
    this.setState({
      isFlipped: false
    });
  }

  handleOnFlip(flipped) {
    if (flipped) {

    }
  }

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
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
          <FlipCard
            disabled={true}
            flipped={this.state.isFlipped}
            onFlip={this.handleOnFlip}
            onKeyDown={this.handleKeyDown}
          >
            <div className="note front" style={this.style}>
              <div className="handle">{postResult.title}</div>
              <div className="content" onClick={this.showBack}>{postResult.categories}</div>
            </div>

            <div className="note back blue-200" style={this.style} onClick={this.showFront}>
              <div>Back</div>
            </div>

          </FlipCard>

        </Col>
      </Draggable>

    );
  }
}

export default Post;
