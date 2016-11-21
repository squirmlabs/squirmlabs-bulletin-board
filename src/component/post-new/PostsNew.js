
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { createPost } from '../../redux/actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
  }
  onSubmit(props) {
    this.props.createPost(props)
    .then(() => {
      this.context.router.push('/');
    });
  }

  renderField = ({ input, label, type, placeholder, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <textarea {...input} placeholder={placeholder} type={type} />
      </div>
      {touched && ((error && <span>{error}</span>))}
    </div>
  )

  render() {
    const { handleSubmit, pristine, submitting, createPost } = this.props;
    console.log('THIS.PROPS', this.props)
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="title" type="text" component={this.renderField} label="Title" placeholder="Got a title?" />
        <Field name="categories" type="text" component={this.renderField} label="Category" placeholder="Provide a category" />
        <Field name="content" type="textarea" component={this.renderField} label="Note" placeholder="What's your note about?" />
        <div>
          <button type="submit" disabled={submitting} className="btn btn-primary">Add</button>
          <Link to="/" className="btn btn-warning">Cancel</Link>
        </div>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter a category';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
PostsNew = reduxForm({
  form: 'initializeFromState',
  fields: ['content'],  // a unique identifier for this form
})(PostsNew)

// You have to connect() to any reducers that you wish to connect to yourself
PostsNew = connect(
  state => ({
    posts: state.posts // pull initial values from account reducer
  }),
  { createPost }               // bind account loading action creator
)(PostsNew)
//
// export default reduxForm({
//   form: 'PostsNewForm',
//   fields: ['content'],
//   validate,
// })(PostsNew);
export default PostsNew

PostsNew.propTypes = {
  requestPosts: PropTypes.func,
  handleSubmit: PropTypes.func,
  createPost: PropTypes.func,
  fields: PropTypes.array,
};
