import React, { Component } from 'react';
import Post from '../post/Post';
import { Col, Row, Grid } from 'react-bootstrap';

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const { posts } = this.props;
    const retrieve = posts;

    const collection = retrieve.map(function(post) {
      const postResult = {
        id: post.id,
        title: post.title,
        categories: post.categories };
      return (
        <Post postResult={postResult} key={postResult.id} />
      );
    });
    return (
      <Grid className="posts">
        <Col xs={12} sm={12} md={12} lg={12} className="no-padding">
          {collection}
        </Col>
      </Grid>
    );
  }
}

export default Posts;

