import React from 'react';
import Post from '../post/Post';
import { Col, Row, Grid } from 'react-bootstrap';

export default (props) => {
  const { posts } = props;
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
