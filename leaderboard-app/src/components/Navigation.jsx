import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          ⚡ Leaderboard
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Leaderboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/judge"
              className={`nav-link ${location.pathname === '/judge' ? 'active' : ''}`}
            >
              Judge Panel
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
