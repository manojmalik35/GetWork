import React from 'react';
const TopBar = () =>{
    return (
      <div className="top-bar">
        <h4>Home</h4>
        <div className="icons">
          <i className="far fa-comment-alt icon"></i>
          <i className="far fa-bell icon"></i>
          <i className="far fa-user-circle icon"></i>
        </div>
      </div>
    );
}

export default TopBar;