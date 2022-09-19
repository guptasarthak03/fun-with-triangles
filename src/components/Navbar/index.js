import React, { useEffect } from 'react';
import './style.css';

const Navbar = ({ setPage }) => {
  // useEffect(() => {
  //   console.log('hi');
  // });

  return (
    <nav className="nav">
      <ul className="nav-links">
        <li className="nav-link">
          <a href="#" onClick={() => setPage('isTriangle')}>
            Triangle?
          </a>
        </li>
        <li className="nav-link">
          <a href="#" onClick={() => setPage('quiz')}>
            Quiz
          </a>
        </li>
        <li className="nav-link">
          <a href="#" onClick={() => setPage('hypotenuse')}>
            Hypotenuse
          </a>
        </li>
        <li className="nav-link">
          <a href="#" onClick={() => setPage('area')}>
            Area
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
