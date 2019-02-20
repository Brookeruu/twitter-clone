import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function User(props) {
console.log(props);
    return (
      <div>

        <p>{props.userName}</p>
        <img src={props.image}></img>

      </div>

    );
  }

User.propTypes = {
  userName: PropTypes.string,
  image: PropTypes.string
};

export default User;
