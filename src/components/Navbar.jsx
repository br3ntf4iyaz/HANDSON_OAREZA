import React from 'react';

function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div className="navbar-logo">
          My Portfolio
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#about" className="navbar-btn">About</a>
          </li>
          <li>
            <a href="#projects" className="navbar-btn">Projects</a>
          </li>
          <li>
            <a href="#contact" className="navbar-btn">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

