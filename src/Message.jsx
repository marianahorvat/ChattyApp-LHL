import React, {Component} from 'react';

const Message = (props) => {

  const regex = /(http)?s?:\/\/.*\.(?:png|jpg|jpeg|gif|png|svg)/;

  const message = regex.test(props.content) 
  ? 
  (
    <div className="message">
      <span className="message-username" style={{color: props.color}}>{props.username}</span>
      <span className="message-content">
        <img className="img" src={props.content} />
      </span>
    </div>
  )
  :
  (
    <div className="message">
      <span className="message-username" style={{color: props.color}}>{props.username}</span>
      <span className="message-content">{props.content}</span>
    </div>
  )

  const notification = (
    <div className="notification">
      <span className="notification-content">{props.content}</span>
    </div>
  )

  // this component will check what type of message/notification it is, and render diff component accordingly
  if (props.type === 'message') {
    return message
  } else if (props.type === 'notification') {
    return notification
  }
}

export default Message;


