import React, { PropTypes } from "react";
import { Router, Link } from "react-router";

const SideBar = (props) => {
  return (
    <div className="col-sm-3 col-md-2 sidebar">
      <ul className="nav nav-sidebar">
        <li>
          <img src={require('../assets/images/InstantaneaLogo-1.png')} style={{height: '45px', paddingLeft: '10px', paddingBottom: '10px'}}/>
        </li>
        <li className={props.title === 'Dashboard' ? 'active' : ''}>
          <Link to='/socialCommittee'><i className="fa fa-users"/> Social Committee</Link>
        </li>
        <li className={props.title === 'Company' ? 'active' : ''}>
          <Link to='/companyOverview'><i className="fa fa-building"/> Company Overiew</Link>
        </li>   
      </ul>
    </div>
  )
}

SideBar.propTypes = {
  title: PropTypes.string.isRequired
}

export default SideBar;
