import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./Header";
import Bio from "./Bio";
import Friends from "./Friends";
import News from "./News";
import Profile from "./Profile";
import UserList from './UserList';



function App(props) {
  var myStyledComponentStyles = {
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: '1fr 1fr 1fr',
    fontFamily: 'arial',
  }
  var headerStyle = {
    gridColumn: '1 / 4',
    gridRow: '1',
  }
  var profileStyle = {
    gridColumn: '1',
    gridRow: '2',
  }
  var bioStyle = {
    gridColumn: '1',
    gridRow: '3',
  }
  var newsStyle = {
    gridColumn: '2',
    gridRow: '2 / 4',
  }
  var friendsStyle = {
    gridColumn: '3',
    gridRow: '2 / 4',
  }

  return (
    <Switch>
      <Route exact path='/' render={()=>
          <div style={myStyledComponentStyles}>
            <div style={headerStyle}>
              <Header/>
            </div>
            <div style={profileStyle}>
              <Profile/>
            </div>
            <div style={bioStyle}>
              <Bio/>
            </div>
            <div style={newsStyle}>
              <News/>
            </div>
            <div style={friendsStyle}>
              <Friends/>
            </div>
          </div>
        }/>
      <Route exact path='/people' render={()=>
        <div>
          <div style={headerStyle}>
            <Header/>
          </div>
          <UserList />
        </div>
      }/>

      </Switch>
    );
  }

export default App;
