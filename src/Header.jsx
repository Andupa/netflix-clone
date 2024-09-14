import React from 'react'
import './Header.css';
function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div classname="header_left">
            <ul>
                <li> <img src={NetflixLogo} alst="Netflix Logo"width="100"/></li>
                <li>Home</li>
                <li>TVShows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
          <div className="header_right">
            <ul>
                {/* <li>SearchIcon</li>
                <li>NotificationIcon</li>
                <li>AccountBoxIcon</li>
                <li>ArrowDropDownicon</li> */}
            </ul>

          </div>
      </div>
    </div>
  )
}

export default Header;
