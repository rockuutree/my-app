import React from 'react';
import whopLogo from '../assets/whop.svg';
import bell from '../assets/bell.svg';
import home from '../assets/home.svg';

function LeftBar() {
  return (
    <div className="left-bar">
      <div className="logo-container">
        <img src={whopLogo} alt="Whop Logo" className="whop-logo" />
      </div>
      <div className="icon-container">
        <img src={home} alt="Home Logo" className="home-logo" />
      </div>
      <div className="icon-container">
        <img src={bell} alt="Bell Logo" className="bell-logo" />
      </div>
      <div className="icon-container">
        <i className="fas fa-user"></i>
      </div>
      <div className="icon-container">
        <i className="fas fa-cog"></i>
      </div>
      <div className="icon-container">
        <i className="fas fa-bell"></i>
      </div>
      <div className="icon-container">
        <i className="fas fa-plus"></i>
      </div>
    </div>
  );
}

export default LeftBar;