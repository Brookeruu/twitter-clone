import React from 'react';
import faker from 'faker';




function FriendSuggestion({image}) {
  var myStyledComponentStyles = {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };
  var imgStyle = {
    borderRadius: '20px',
    border: '3px white solid',
    marginTop: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    backgroundColor: 'lightblue',
    width: '40px'
  };
  var itemImage = {

  };
  var buttonStyle = {
    alignItem: 'center',
    marginTop: '20px',
    padding: '5px',
  };


  return (
    <div style = {myStyledComponentStyles}>
      <div style = {itemImage}>
        <img style = {imgStyle} src = {faker.image.avatar()} />
      </div>
      <div>
        <h4>{faker.name.findName()}</h4>
      </div>
      <div>
        <button style = {buttonStyle}> Follow+ </button>
      </div>
    </div>

  );
}

export default FriendSuggestion;
