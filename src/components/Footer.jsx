  
import React from "react";

const Footer = () => {
  return (
  <>
  <div className="ui section divider" />
  <div className="ui container">
    <div className="ui vertical footer segment">
        <div className="ui stackable grid">
        <div className="four wide column">
          <div className="ui header">소개</div>
          <div className="ui list">
          <a className="item" href="/about">팀</a>
          
        </div>
        </div>
        <div className="two wide column">
        <div className="ui header">프로젝트</div>
        <div className="ui list">
          <a className="item" href="/intbot">인트봇</a>
          <a className="item" href="/whitebear">화베봇</a>
          <a className="item" href="/games">게임</a>
        </div>
          
        </div>
        </div>
        
    </div>
    <h1 className="ui header">Team Int</h1>
        <h4 className="ui header" style={{marginTop: '-15px'}}>Team Int</h4>
        <p>대표: 인트</p>
        <p>Copyright 2021 Team Int, All rights reserved.</p>
    <div className="ui horizontal list">
          <a href='/tos' className="item">이용약관</a> <a href='/privacy' className="item">개인정보취급방침</a>
        </div>
  </div>
  </>
  );
};
export default Footer;