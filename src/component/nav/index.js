import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import FontIcon from 'react-toolbox/lib/font_icon';

const Nav = (props) => {
  return (
    <nav id="nav">
      <ul className="nav">
        <li className={props.handleActiveNavItem}>
          <Link to={'dashboard'}>
            <span className="pull-right text-muted">
              <i className="fa fa-caret-down"></i>
            </span>
            <i className="mdi mdi-action-settings i-20"></i>
            <i className="pull-right up"><b className="badge no-bg">2</b></i>
            <span className="font-normal">Dashboard</span>
          </Link>
        </li>
        <li className={props.handleActiveNavItem}>
          <Link to={'alerts'}>
            <span className="pull-right text-muted">
              <i className="fa fa-caret-down"></i>
            </span>
            <i className="pull-right up"><b className="label bg-info">6</b></i>
            <FontIcon value="new_releases" className="mdi mdi-device-multitrack-audio i-20"/>
            <span className="font-normal">Alerts</span>
          </Link>
        </li>
        <li className={props.handleActiveNavItem}>
          <Link to={'configure'}>
            <span className="pull-right text-muted">
              <i className="fa fa-caret-down"></i>
            </span>
            <i className="pull-right up"><b className="badge bg-success">14</b></i>
            <i className="icon mdi-action-settings i-20"></i>
            <span className="font-normal">Configure</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
 export default Nav;


