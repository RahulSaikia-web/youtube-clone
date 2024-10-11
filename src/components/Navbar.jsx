import React from "react";
import "../CSS/Navbar.css";
// import menu_icon from "../img/menu.png";
import logo from "../img/logo.png";
import search_icon from "../img/search.png";
import upload_icon from "../img/upload.png";
import notification from "../img/notification.png";
import more_icon from "../img/more.png";
import profile_icon from "../img/user_profile.jpg";

function Navbar() {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        {/* <img className="menu-icon" src={menu_icon} alt="" /> */}
        <img className="logo" src={logo} alt="" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
