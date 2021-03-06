import React from 'react';
import Message from '../components/Message';

const MessagesContainer = React.createClass({
  componentDidMount: function(){
    this.scrollToBottom();
  },
  componentDidUpdate: function(){
    this.scrollToBottom();
  },
  scrollToBottom: function(){
    var messageContainer = document.querySelector('.messages-container');
    messageContainer.scrollTop = messageContainer.scrollHeight;
  },
  render: function(){
    return (
      <div className="messages-container">
        {this.props.renderMessages()}
      </div>
    );
  }
});

export default MessagesContainer;
