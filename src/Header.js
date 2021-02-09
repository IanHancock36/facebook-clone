import React from "react";
import './HeaderStyle.css'
import SearchIcon from '@material-ui/icons/Search';
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19761.png"
          alt =""/>
      <div className = "header__input">
      <SearchIcon />
      <input type = 'text'/> 
      </div>
      </div> 
      
      <div className="header__middle"></div>
      <div className="header__right"></div>
    </div>
    
  );
}

export default Header;
// The header is split into 3 sections left, center, right
