import React from 'react';
import faker from 'faker';


function Profile(props) {
  var myStyledComponentStyles = {
    border: '2px lightgrey solid',
  };
  var profileTopDiv = {
    padding: '30px',
    backgroundColor: 'lightblue'
    // border: '1px red solid'
  };
  var imgStyle = {
    borderRadius: '20px',
    border: '3px white solid',
    marginTop: '20px',
    marginLeft: '30px',
    marginRight: '10px',
    float: 'left',
    backgroundColor: 'lightblue',
    maxWidth:'80px'
  };
  var nameStyle = {
    paddingBottom: '10px',
    marginTop: '0px',
    fontFamily: 'arial',
    paddingLeft: '10px'
  };
  var aStyle ={
    marginLeft: '5px',
    marginRight: '5px'
  };

  return (
    <div style = {myStyledComponentStyles}>
      <div>
        <img style = {imgStyle}  src = {faker.image.avatar()} />
        <div style = {profileTopDiv} />
        <h5 style = {nameStyle}>{faker.name.findName()}</h5>
      </div>
      <div>
        <a style = {aStyle}>TWEETS</a>
        <a style = {aStyle}>FOLLOWING</a>
        <a style = {aStyle}>FOLLOWERS</a>
      </div>

    </div>

  );
}

export default Profile;
