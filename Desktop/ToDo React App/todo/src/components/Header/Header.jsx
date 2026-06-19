import React from 'react';

const Header = ({ total, completed }) => {
  return (
    <div className="header">
      <h1 className="header-title">TODO</h1>
      <div className="header-stats">
        <span className="stat-badge">Total: {total}</span>
        <span className="stat-badge">Done: {completed}</span>
        <span className="stat-badge">Left: {total - completed}</span>
      </div>
    </div>
  );
};

export default Header;