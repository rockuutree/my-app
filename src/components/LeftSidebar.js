import React from 'react';
import whopBG from '../assets/whopBG.png';

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-content">
        <img src={whopBG} alt="Whop Background" className="sidebar-bg" />
        <ul className="sidebar-menu">
          <li><i className="fas fa-home"></i> Welcome</li>
          <li><i className="fas fa-heart"></i> Our Links</li>
          <li><i className="fas fa-user"></i> Introduce Yourself</li>
          <li><i className="fas fa-lightbulb"></i> Genius Bar</li>
          <li><i className="fas fa-bullhorn"></i> Important</li>
          <li><i className="fas fa-bullhorn"></i> Announcements</li>
          <li><i className="fas fa-comments"></i> Chat</li>
          {/* Add more menu items */}
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;