import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions';
import { instagramSearchTags } from '../../redux/actions/';
import Navbar from '../navbar/Navbar';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {term: '' };

  }
  onInputChange(term){
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render (){


    return(
      <div className="navbar md-whiteframe-z1 no-radius indigo">
        <div className="navbar-item pull-left h4">Banana</div>
        <Navbar className="pull-right" />
        <div id="search" className="pos-abt w-full h-full blue hide">
          <div className="box">
            <div className="box-col w-56 text-center">
              <a className="navbar-item inline" onClick={this.toggleShowArrow} target="#search"><i className="mdi-navigation-arrow-back i-24"></i></a>
            </div>
            <div className="box-col v-m">

              <input className="form-control input-lg no-bg no-border" value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} placeholder="Search" />
            </div>
            <div className="box-col w-56 text-center">
              <a md-ink-ripple className="navbar-item inline"><i className="mdi-av-mic i-24"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStatetoProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStatetoProps, Actions)(SearchBar);

