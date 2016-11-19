import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import momentT from 'moment-timezone';
import ResultCardStyles from './ResultCardStyles.less';
import { Card, CardMedia, CardTitle, CardText, CardActions } from '../../card/';
import FontIcon from '../../font_icon';
import { converUnixMoment } from '../../utils/moment';

class ResultCard extends Component {
  constructor(props) {
    super(props);
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

  getResultValue(result, type) {
    let value;

    const isId = (data) => {
      value = ('id' in data) && data.id != null ? data.id : '';
      return value;
    };

    const isName = (data) => {
      value = ('full_name' in data.user) && data.user.full_name != null ? data.user.full_name : '';
      return value;
    };

    const isCaption = (data) => {
      value = ('caption' in data) && data.caption != null ? data.caption : '';
      return value.text;
    };

    const isImage = (data) => {
      value = ('url' in data.images.standard_resolution) && data.images.standard_resolution.url != null ? data.images.standard_resolution.url : '';
      return value;
    };

    const isProfilePicture = (data) => {
      value = ('user' in data) && data.user.profile_picture != null ? data.user.profile_picture : '';
      return value;
    };

    const isDate = (data) => {
      value = ('created_time' in data) && data.created_time != null ? data.created_time : '';
      const createdDated = converUnixMoment(value);
      return createdDated;
    };

    const types = {
      id: isId,
      name: isName,
      caption: isCaption,
      date: isDate,
      img: isImage,
      profile_picture: isProfilePicture,
    };

    return types[type](result);
  }


  render() {
    const { cardResult } = this.props;

    const imgUrl = this.getResultValue(cardResult, 'img')

    const bgStyle = {
      backgroundImage: `url('${imgUrl}')`,
    };

    const cardStyle = {
      width: '350px',
      margin: '20px auto',
    };

    return (
      <div className="card" style={cardStyle} key={this.getResultValue(cardResult, 'id')}>
        <div className="cardTitle small">
          <div data-react-toolbox="avatar" className="avatar">
            <img role="presentation" src={this.getResultValue(cardResult, 'profile_picture')} />
          </div>
          <div>
            <h5 className="title">{this.getResultValue(cardResult, 'date')}</h5>
            <p className="subtitle">{this.getResultValue(cardResult, 'name')}</p>
          </div>
        </div>
        <div className="cardMedia wide" style={bgStyle}></div>
        <div className="cardText">
          <p>{this.getResultValue(cardResult, 'caption')}</p>
        </div>
        <div className="cardActions">
          <div>
            <FontIcon value='favorite' />
            {cardResult.likes.count}
          </div>
        </div>
      </div>
    );
  }
}

export default ResultCard;
