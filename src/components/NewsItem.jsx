import React from "react";
import PropTypes from "prop-types";
import emptyHeart from "../assets/Heart_icon_red_hollow.svg";
import filledHeart from "../assets/Heart_icon_red_filled.svg";

import * as styles from "../Styles/NewsItemStyles";

class NewsItem extends React.Component {
  constructor(props) {
    super(props)
    this.props = props;
    this.state = {
      favoriteClicked: false
    }
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    let userName = '';
    let content = '';

  }

  handleFavoriteClick(){
    let favoriteClicked = this.state.favoriteClicked;
    if (favoriteClicked === false) {
      this.setState({favoriteClicked: true });
    } else if (favoriteClicked === true) {
      this.setState({favoriteClicked: false});
    }
  }


  render() {
    let heart;
    if (this.state.favoriteClicked === false) {
      heart = emptyHeart
    } else if (this.state.favoriteClicked === true) {
      heart = filledHeart
    }
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
