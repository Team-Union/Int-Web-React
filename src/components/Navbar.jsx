import React from "react";

const NavBar = props => {
  return (
    <div className="ui inverted container">
      <nav>
        <div className="ui inverted secondary menu">
          <a className="ui active item" href="/">
            <img src="/logo192.png" alt="Logo" width="100" />
            Team Int
          </a> 
          <div className="right menu">
            <div className="item">
              <a className="circular ui inverted button" href="/discord">
                디스코드 서버
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;