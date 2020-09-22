import React, { Component } from 'react';
import TopBar from './TopBar';
import RestPage from './RestPage';

class Content extends Component {
    state = {
  
    }
  
    render() {
      return (
        <div className="content">
          <TopBar></TopBar>
          <RestPage></RestPage>
        </div>
      );
    }
  }
  
  export default Content;