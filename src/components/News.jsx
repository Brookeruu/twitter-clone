import React from "react";
import NewsItem from "./NewsItem";
import NewsForm from "./NewsForm";
import PropTypes from "prop-types";

class News extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterNewsItemList: []
    }

    this.handleAddingNewNewsItemToMasterNewsItemList = this.handleAddingNewNewsItemToMasterNewsItemList.bind(this);

    this.myStyledComponentStyles = {
      border: '1px lightblue solid',
      fontFamily: 'arial',
    }
    this.postStyle = {
      border: '1px grey solid',
      backgroundColor: 'red',
    }
    this.itemStyle = {
      backgroundColor: 'grey',
    }
  }


  handleAddingNewNewsItemToMasterNewsItemList(newNews){
    let newMasterNewsItemList = this.state.masterNewsItemList.slice();
    newMasterNewsItemList.push(newNews);
    this.setState({masterNewsItemList: newMasterNewsItemList});
  }

  render(props) {
    return (
      <div style={this.myStyledComponentStyles}>

        <NewsForm
          onAddingNewNewsItemToMasterNewsItemList={this.handleAddingNewNewsItemToMasterNewsItemList}
          testInputThingy="testInputThingy Output"/>

        {this.state.masterNewsItemList.map((news) =>
          <NewsItem userName={news.userName}
            content={news.content}
            timeStamp={news.timeStamp}
            key={news.id}/>
        )}
      </div>
    );
  }


}

export default News;
