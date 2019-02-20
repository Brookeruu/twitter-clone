import React from 'react';

function Other(props) {
  var myStyledComponentStyles = {
    border: '2px lightgrey solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5px',
    borderRadius: '10px',
  };
  var styleButtons = {
  };
  var styleTweet = {

  };
  return (
    <div style = {myStyledComponentStyles}>
      <div style = {styleButtons}>
        <button>Home</button>
        <button>Notifications</button>
        <button>Messages</button>
      </div>
      <div style = {styleTweet}>
        <input placeholder = "something" />
        <button>Tweet</button>
      </div>
    </div>

  );
}

export default Other;
