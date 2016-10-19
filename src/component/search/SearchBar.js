import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { instagramSearchTags } from '../../redux/actions/';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }
  onFormSubmit(event) {
    // Don't submit the form
    event.preventDefault();

    // Fetch Weather Data, bind fetchWeater as a property to this container
    this.props.instagramSearchTags(this.state.term);
    this.setState({
      term: '',
    });

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ instagramSearchTags }, dispatch);
}

// Connect component through mapDispatchToProps with SearchBar
export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  instagramSearchTags: PropTypes.func,
};