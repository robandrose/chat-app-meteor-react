import React from 'react';
import Message from '../components/Message';

const MessagesContainer = React.createClass({
  render: function(){
    return (
      <div className="messages-container">
        {this.props.renderMessages()}
      </div>
    );
  }
});

export default MessagesContainer;