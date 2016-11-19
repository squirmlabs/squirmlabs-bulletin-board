import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class ChatModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolLength: 19,
    };
  }
  render() {
    return (
      <div className="modal fade" id="chat" data-backdrop="false">
        <div className="right w-xxl bg-white md-whiteframe-z2">
          <div className="box">
            <div className="p p-h-md">
              <a data-dismiss="modal" className="pull-right text-muted-lt text-2x m-t-n inline p-sm">&times;</a>
              <strong>Chat</strong>
            </div>
            <div className="box-row bg-light lt">
              <div className="box-cell">
                <div className="box-inner">
                  <div className="p-md">
                    <div className="m-b">
                      <a href className="pull-left w-40 m-r-sm">
                        <img src="http://localhost:8085/img/a2.jpg" className="w-full img-circle" /></a>
                      <div className="clear">
                        <div className="p p-v-sm bg-warning inline r">
                          Hi John, What's up...
                        </div>
                        <div className="text-muted-lt text-xs m-t-xs"><i className="fa fa-ok text-success"></i> 2 minutes ago</div>
                      </div>
                    </div>
                    <div className="m-b">
                      <a href className="pull-right w-40 m-l-sm"><img src="http://localhost:8085/img/a3.jpg" className="w-full img-circle" alt="..." /></a>
                      <div className="clear text-right">
                        <div className="p p-v-sm bg-info inline text-left r">
                          Lorem ipsum dolor soe rooke..
                        </div>
                        <div className="text-muted-lt text-xs m-t-xs">1 minutes ago</div>
                      </div>
                    </div>
                    <div className="m-b">
                      <a href className="pull-left w-40 m-r-sm"><img src="http://localhost:8085/img/a2.jpg" alt="..." className="w-full img-circle" /></a>
                      <div className="clear">
                        <div className="p p-v-sm bg-warning inline r">
                          Good!
                        </div>
                        <div className="text-muted-lt text-xs m-t-xs"><i className="fa fa-ok text-success"></i> 5 seconds ago</div>
                      </div>
                    </div>
                    <div className="m-b">
                      <a href className="pull-right w-40 m-l-sm"><img src="http://localhost:8085/img/a3.jpg" className="w-full img-circle" alt="..." /></a>
                      <div className="clear text-right">
                        <div className="p p-v-sm bg-info inline text-left r">
                          Dlor soe isep..
                        </div>
                        <div className="text-muted-lt text-xs m-t-xs">Just now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-h-md p-v">
              <a className="pull-left w-32 m-r">
                <img src="http://localhost:8085/img/a3.jpg" className="w-full img-circle" />
              </a>
              <form>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Say something" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">SEND</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStatetoProps({ albums, menuItem }) {
  return { albums, menuItem };
}

// Connect PostsIndex with state using mapStatetoProps
export default connect(mapStatetoProps, {})(ChatModal);

ChatModal.propTypes = {
};


