import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewsForm(props) {
  let myStyledComponentStyles = {

  };
  let inputStyle = {
    backgroundColor: 'lightblue',
    color: 'blue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
  };
  let userBlockStyle = {
    borderRadius: '3px',
    height:'40px',
    width: '40px',
    marginRight: '15px',
    backgroundColor: 'darkred'
  };
  let inputBoxStyle = {

  };

  let _userName = null;
  let _content = null;

  function handleNewNewsItemFormSubmission(event) {
    event.preventDefault();
    const d = new Date();
    const timeStamp = d.toDateString();
    props.onAddingNewNewsItemToMasterNewsItemList({userName: _userName.value, content: _content.value, id: v4(), timeStamp: timeStamp});
    _userName.value = '';
    _content.value = '';
  }

  return (
    <div style = {myStyledComponentStyles}>
      <form onSubmit = {handleNewNewsItemFormSubmission}>
        <div style = {inputStyle}>
          <div style = {userBlockStyle} />
          <div style = {inputBoxStyle}>
            <input
              type = "text"
              placeholder = "userName"
              ref = {(input) => {_userName = input;}} />
            <textarea
              type = 'text'
              placeholder = "What's Happening?"
              ref = {(textarea) => {_content = textarea;}} />
          </div>
        </div>
        <button type = "submit">Tweet</button>
      </form>
      {props.onAddingNewNewsItemToMasterNewsItemList}
    </div>

  );
}

NewsForm.propTypes ={
  onAddingNewNewsItemToMasterNewsItemList: PropTypes.func,
  testInputThingy: PropTypes.string
};

export default NewsForm;
