import React from 'react';
import FriendSuggestion from './FriendSuggestion';
import PropTypes from 'prop-types';



function Friends() {
  var myStyledComponentStyles = {
    border: '2px lightgrey solid',
  };

  return (
    <div style = {myStyledComponentStyles}>
      <h2>Friends you may know:</h2>
      <FriendSuggestion />
      <hr />
      <FriendSuggestion />
      <hr />
      <FriendSuggestion />
      <hr />
    </div>

  );
}

Friends.propTypes = {
  username: PropTypes.string,
  image: PropTypes.string
};

export default Friends;
