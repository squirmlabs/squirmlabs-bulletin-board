import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ResultCardStyles from './ResultCardStyles.less';
import FontIcon from 'react-toolbox/lib/font_icon';

class ResultCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      isCloseBtnVisible: false,
    }
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  componentDidMount() {
    ResultCardStyles.use();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (true);
  }
  componentWillUnmount() {
    ResultCardStyles.unuse();
  }

  render() {
    const { tag } = this.props;
    return (
      <div className="sq-bounty-a card" key={tag.id}>
        <Row className="sq-controls no-margin">
          <Col sm={6} md={6} className="no-padding">
            <div className="sq-creator">
              <p className="sq-user">
                user
              </p>
              <p className="sq-date">
                date
              </p>
            </div>
          </Col>
          <Col sm={6} md={6} className="sq-control sq-control-amount no-margin">
            <div className="sq-amount-control-group">
              <div className="sq-amount-control sq-threshold">
                <button className="cbutton cbutton--effect-ivana">
                  <FontIcon value="trending_up" className="cbutton__icon sq-state-threshold" />
                  <span className="sq-label">Something</span>
                  <h2 className="sq-threshold-value">
                    Value
                  </h2>
                  <span>/</span>
                </button>
              </div>
              <div className="sq-amount-control sq-amount">
                <h2 className="sq-amount-value">
                  Value
                </h2>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="sq-challenge no-margin">
          <FontIcon value="location_searching" />
          <h2>Value</h2>
        </Row>

        <Row className="sq-failcondition no-margin">
          <FontIcon value="new_releases" />
          <p>Value</p>
        </Row>

        <Row className="sq-message no-margin">
          <FontIcon value="insert_comment" />
          <p>Value</p>
        </Row>

        <Row className="sq-meme no-margin">
          <div className="sq-tooltip" >
            <button className="no-padding">
              <span data-react-toolbox="font-icon" className="material-icons mdi mdi-image-tag-faces"></span>
              <p>Value</p>
              <p>/</p>
              <p>Value</p>
            </button>
          </div>
        </Row>

        <Row className="sq-state-controls no-margin">
          <div className="sq-state-control sq-control-add no-margin">
            <button className="cbutton cbutton--effect-ivana">
              <FontIcon value="playlist_add" className="cbutton__icon sq-state-add" />
              <span className="sq-label">Accept</span>
            </button>
          </div>
          <div className="sq-state-control sq-control-reject no-margin">
            <button className="cbutton cbutton--effect-ivana">
              <FontIcon value="not_interested" className="cbutton__icon sq-state-reject" />
              <span className="sq-label">Reject</span>
            </button>
          </div>

          <div className="sq-state-control sq-control-joins no-margin">
            <button className="cbutton cbutton--effect-ivana">
              <FontIcon value="thumb_up" className="cbutton__icon sq-control-joins" />
              <span className="sq-label">Value</span>
            </button>
          </div>

          <div className="sq-state-control sq-control-votes no-margin">
            <button className="cbutton cbutton--effect-ivana">
              <FontIcon value="group_add" className="cbutton__icon sq-control-votes" />
              <span className="sq-label">Value</span>
            </button>
          </div>
          <div className="sq-state-control sq-control-votes no-margin">
            <button className="cbutton cbutton--effect-ivana">
              <FontIcon value="card_membership" className="cbutton__icon sq-control-votes" />
              <span className="sq-label">Value</span>
            </button>
          </div>

        </Row>
      </div>
      );
    }
  }

  export default ResultCard;
