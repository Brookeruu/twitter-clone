import React from "react";
import PropTypes from 'prop-types';
import faker from 'faker';
import { v4 } from 'uuid';
import User from './User'

class UserList extends React.Component {
  constructor(props) {
    super(props);
    let users = []
    for(let i=0;i<20;i++) {
      let newUser = {userName: faker.name.findName(), image: faker.image.avatar(), id: v4()};
      users.push(newUser)
    this.props = props;
    this.state = {
      masterUserList: users
    }

    this.handleAddingNewUser = this.handleAddingNewUser.bind(this);

    }
    console.log(this.state.masterUserList);
  }


  handleAddingNewUser(){

      let newUser = {username: faker.name.findName(), image: faker.image.avatar()};
      let newMasterUserList = this.state.masterUserList.slice();
      newMasterUserList.push(newUser);
      this.setState({masterUserList: newMasterUserList});

  }

  render(props) {


    return(
    <div>
      {this.state.masterUserList.map((user) =>
        <User userName = {user.userName}
          image = {user.image}
          key = {user.id} />
      )}
    </div>
    )
  }


}


export default UserList;
