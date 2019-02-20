import React from "react";
import PropTypes from 'prop-types';
import faker from 'faker';


class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterFriendList: []
    }
    this.handleAddingNewFriend = this.handleAddingNewFriend.bind(this);
  }
  for(let i = 0; i < 20; i++ ) {
    let friendObject = {username: faker.name.findName(), image: faker.image.avatar()};
    masterFriendList.push(friendObject)
  }


}

  handleAddingNewFriend(newFriend){
    let newMasterFriendList = this.state.masterFriendList.slice();
    newMasterFriendList.push(newFriend);
    this.setState({masterFriendList: newMasterFriendList});
  }

  render(props) {

  }


export default FriendList;
