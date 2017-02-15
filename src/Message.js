import React from 'react';

const Message = props => {
  let text = props.text
  let type = props.type
  let handleClick = props.handleClick

  return (
    <div className="message" onClick={handleClick}>
      <h2>{type}</h2>
      <h4 className="messageBody">{text}</h4>
    </div>
  );
};

export default Message;
