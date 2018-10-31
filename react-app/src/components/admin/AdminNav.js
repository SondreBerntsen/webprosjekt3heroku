import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class AdminNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg  navbar-dark adminSideBarNav col-md-3 col-lg-2">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul>
            <li className=" nav-item linkToHome">
              <NavLink className="linkTxt" exact to="/">
                Vis nettsted
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="linkTxt" to="/admin/events">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="linkTxt" to="/admin/venues">
                Venues
              </NavLink>
            </li>
            <li className="nav-item" >
              <NavLink className="linkTxt" to="/admin/schedule">
                Schedule
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="linkTxt" to="/admin/posts">
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="linkTxt" to="/admin/general">
                General
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="linkTxt" to="/admin/users">
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default AdminNav;