import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

const Search = (props) => {
  return (
    <div id="search" className="pos-abt w-full h-full">
      <div className="box">
        <div className="box-col w-56 text-center">
          <a className="navbar-item inline">
            <i className="mdi-navigation-arrow-back i-24"></i></a>
        </div>
        <div className="box-col v-m">
          <input className="form-control input-lg no-bg no-border" placeholder="Search" />
        </div>
        <div className="box-col w-56 text-center">
          <a className="navbar-item inline">
            <i className="mdi-av-mic i-24"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Search;


