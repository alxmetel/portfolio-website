import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="page-header">
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About Me</Link></li>
          <li><Link to={'/projects'}>Projects</Link></li>
          <li><Link to={'/skills'}>My Skills</Link></li>
          <li><Link to={'/skills'}>Hire Me</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;