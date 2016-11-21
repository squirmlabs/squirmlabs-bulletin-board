import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../redux/actions/index';
import { Router, Route, Link, browserHistory } from 'react-router'
import DetailsStyles from './posts-details.less';

class PostsDetails extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  componentDidMount() {
    DetailsStyles.use();
  }

  componentWillUnmount() {
    DetailsStyles.unuse();
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete
        </button>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.title}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post,
})

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsDetails);

PostsDetails.propTypes = {
  fetchPost: PropTypes.func,
  deletePost: PropTypes.func,
  post: PropTypes.object,
  params: PropTypes.object,
};
