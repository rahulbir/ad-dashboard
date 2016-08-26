import React, { PropTypes } from "react";

import SideBar from "./SideBar";

import "../assets/stylesheets/main.css";

const App = (props) => {
  return (
    <div className='main-container'>
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-md-2 sidebar">
            <SideBar title={props.title}/>
          </div>

          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
};

App.propTypes = {
  title: PropTypes.string.isRequired
}

export default App;
