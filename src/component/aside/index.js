import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import Nav from '../nav';

import styles from './styles.less';


export default class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolLength: 19,
      isFolded: 'folded',
    }
    this.handleAsideFold = this.handleAsideFold.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
    styles.use();
  }

  componentWillUnmount() {
    styles.unuse();
  }

  handleAsideFold() {
    const folded = this.state.isFolded;
    if (folded === 'true') {
      return 'folded';
    }
    return '';
  }

  render() {
    const logoStyle = {
      maxHeight: '36px',
      display: 'none',
    };

    return (
      <div id="aside" className={`app-aside modal fade ${this.state.isFolded}`}>
        <div className="box">
          <div className="navbar md-whiteframe-z1 no-radius sq-brand">
            <a className="navbar-brand">
              <img src="http://localhost:8085/img/logo.png" alt="." style={logoStyle} />
              <span className="hidden-folded m-l inline">Bounties</span>
            </a>
          </div>
          <div className="box-row">
            <div className="box-cell scrollable hover">
              <div className="box-inner">
                <div className="p hidden-folded">
                  <div className="rounded w-64 inline pos-rlt">
                    <img src="http://localhost:8085/img/a0.jpg" role="presentation" className="img-responsive rounded" />
                  </div>
                  <a className="block m-t-sm" target="#nav, #account">
                    <span className="block font-bold">John Smith</span>
                    <span className="pull-right auto">
                      <i className="fa inline fa-caret-down"></i>
                      <i className="fa none fa-caret-up"></i>
                    </span>
                  </a>
                </div>
                <Nav handleActiveNavItem={this.handleActiveNavItem}/>
                <div id="account" className="hide m-v-xs">
                  <nav>
                    <ul className="nav">
                      <li>
                        <a>
                          <i className="icon mdi-action-perm-contact-cal i-20"></i>
                          <span>My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="icon mdi-action-settings i-20"></i>
                          <span>Settings</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="icon mdi-action-exit-to-app i-20"></i>
                          <span>Logout</span>
                        </a>
                      </li>
                      <li className="m-v-sm b-b b"></li>
                      <li>
                        <a>
                          <i className="icon mdi-navigation-fullscreen i-24"></i>
                          <span>Fullscreen</span>
                        </a>
                      </li>
                      <li>
                        <div className="nav-item">
                          <label className="md-check">
                            <input type="checkbox" />
                            <i className="no-icon"></i>
                            <span className="hidden-folded">Folded aside</span>
                          </label>
                        </div>
                      </li>
                      <li className="p p-v-sm hidden-folded"></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <ul className="nav b-t b">
              <li>
                <a>
                  <i className="icon mdi-action-help i-20"></i>
                  <span>Help &amp; Feedback</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

