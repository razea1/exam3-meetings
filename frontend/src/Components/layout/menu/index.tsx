import React from 'react';
import './menu.css';
import { NavLink } from "react-router-dom";

function menu(): JSX.Element  {
  return (
    <div className="container">
      <h1 className="heading">Welcome to the Home Page</h1>
      <div className="button-wrapper">
        <NavLink to="/addNewMeeting" className="button">
          Add Meeting
        </NavLink>
      </div>
      <div className="button-wrapper">
        <NavLink to="/MeetingTablePage" className="button">
          See Meetings Table
        </NavLink>       
      </div>
    </div>
  );
};

export default menu;
