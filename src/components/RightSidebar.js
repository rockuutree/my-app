import React from 'react';

function RightSidebar() {
  const users = [
    { avatar: 'pfp.png', username: 'Anthony DeFrancesco', handle: '@nycfoodvine' },
    { avatar: 'pfp.png', username: 'kashifrahimi0700', handle: '@kashifrahimi0700' },
    // Add more user data
  ];

  return (
    <div className="right-sidebar">
      <button className="new-suggestion-btn">+ New Suggestion</button>
      <ul className="user-directory">
        {users.map((user, index) => (
          <li key={index}>
            <img src={user.avatar} alt={user.username} />
            <span className="username">{user.username}</span>
            <span className="handle">{user.handle}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RightSidebar;