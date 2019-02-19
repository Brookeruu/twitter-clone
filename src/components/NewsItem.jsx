import React from "react";
import PropTypes from "prop-types";
import emptyHeart from "../assets/Heart_icon_red_hollow.svg";
import filledHeart from "../assets/Heart_icon_red_filled.svg";
import greenFace from "../assets/greenFace.png";
import vomitFace from "../assets/vomitFace.png";

import * as styles from "../Styles/NewsItemStyles";

class NewsItem extends React.Component {
  constructor(props) {
    super(props)
    this.props = props;
    this.state = {
      votes: {favoriteClicked: false, dislikeClicked: false }
    }
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    this.handleDislikeClick = this.handleDislikeClick.bind(this);

    let userName = '';
    let content = '';

  }

  handleDislikeClick(){
    let dislikeClicked = this.state.votes.dislikeClicked;
    let favoriteClicked = this.state.votes.favoriteClicked;
    if (dislikeClicked === false) {
      this.setState(function(state) {
        return {
          votes: Object.assign({},
            state.votes, {
              favoriteClicked: false,
              dislikeClicked: true
          })
        }
      })
    } else if (dislikeClicked === true) {
      this.setState(function(state) {
        return {
          votes: Object.assign({},
            state.votes, {
              dislikeClicked: false
          })
        }
      })
    }
  }

  handleFavoriteClick(){
    let dislikeClicked = this.state.votes.dislikeClicked;
    let favoriteClicked = this.state.votes.favoriteClicked;
    if (favoriteClicked === false ) {
      this.setState(function(state) {
        return {
          votes: Object.assign({},
            state.votes, {
              favoriteClicked: true,
              dislikeClicked: false
          })
        }
      })
    } else if (favoriteClicked === true ) {
      this.setState(function(state) {
        return {
          votes: Object.assign({},
            state.votes, {
              favoriteClicked: false,
          })
        }
      })
    }
  }


  render() {
    let heart;
    let dislikeFace;
    if (this.state.votes.favoriteClicked === false) {
      heart = emptyHeart
    } else if (this.state.votes.favoriteClicked === true) {
      heart = filledHeart
    }
    if (this.state.votes.dislikeClicked === false) {
      dislikeFace = greenFace;
    } else if (this.state.votes.dislikeClicked === true) {
      console.log("hit");
      dislikeFace = vomitFace;    }
    return (
      <div style={styles.myStyledComponentStyles}>
        <style jsx> {`
            img {
              max-width: 20px;
            }
      `}
        </style>
        <div style={styles.itemImage}>
          <img style={styles.imgStyle} src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png"></img>
        </div>
        <hr/>
        <div style={styles.itemContent}>
          <p><em>User Name: {this.props.userName} </em></p>
            <hr/>
            <p>{this.props.content}</p>
            <p>
              <img onClick={this.handleFavoriteClick} src={heart}></img>
              <img onClick={this.handleDislikeClick} src={dislikeFace}></img>
            </p>
        </div>
      </div>

    );
  }
}
NewsItem.propTypes = {
  userName: PropTypes.string,
  content: PropTypes.string
}

export default NewsItem;
