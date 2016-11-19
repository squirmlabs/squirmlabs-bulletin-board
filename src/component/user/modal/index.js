import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class UserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // styles.use();
  }

  componentWillUnmount() {
    // styles.unuse();
    this.subscription.dispose();
  }

  render() {
    const { state } = this;
    return (
      <div className="modal fade inactive" id="user" data-backdrop="false">
        <div className="right w-xl bg-white md-whiteframe-z2">
        </div>
      </div>
    );
  }
}

