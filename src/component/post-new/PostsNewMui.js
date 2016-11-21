
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { createPost } from '../../redux/actions/index';
import { Link } from 'react-router';


import TextField from 'material-ui/TextField'
import asyncValidate from '../utils/asyncValidate'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class PostsNewMui extends Component {
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

  renderTextField({ input, label, meta: { touched, error }, ...custom }) {
    return (
      <TextField hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
      />
    )
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, createPost } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field name="title" component={this.renderTextField} label="Title" />
          </div>
          <div>
            <Field name="categories" component={this.renderTextField} label="Note" />
          </div>
          <div>
            <Link to="/" className="btn btn-warning">Back</Link>
            <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Add</button>
            <button type="button" className="btn btn-warning" disabled={pristine || submitting} onClick={reset}>Cancel
            </button>
          </div>
        </form>
      </MuiThemeProvider>
    )
  }
}
const validate = (values) => {
  const errors = {}
  const requiredFields = [ 'title', 'categories']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter a Note';
  }
  return errors
}

PostsNewMui = reduxForm({
  form: 'initializeFromState',
  validate,
  asyncValidate,
  fields: ['title', 'categories'],
})(PostsNewMui)

PostsNewMui = connect(
  state => ({
    posts: state.posts,
  }),
  { createPost }
)(PostsNewMui);

export default PostsNewMui

PostsNewMui.propTypes = {
  requestPosts: PropTypes.func,
  handleSubmit: PropTypes.func,
  createPost: PropTypes.func,
  fields: PropTypes.array,
};