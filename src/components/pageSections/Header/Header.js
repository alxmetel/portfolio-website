import React, { useState, useEffect } from 'react';
import './Header.scss';
import smoothscroll from 'smoothscroll-polyfill';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { toggleBodyNoscroll } from '../../../utilities/domFunctions';

const Header = () => {

  useEffect(() => {
    smoothscroll.polyfill(); // smooth scrolling for iOS Safari
  }, []);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
    toggleBodyNoscroll();
  }

  function closeMenu() {
    if (menuIsOpen) {
      setMenuIsOpen(false);
      toggleBodyNoscroll();
    }
  }

  function handleMenuClick() {
    toggleMenu();
  }

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }

  function renderNavigationBlock() {
    return (
      <div className="nav-block">
        <nav>
          <ul>
            <li><NavLink to='/#header-video'  scroll={el => scrollWithOffset(el, 0)} onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to='/#about'         scroll={el => scrollWithOffset(el, 100)} onClick={closeMenu}>About Me</NavLink></li>
            <li><NavLink to='/#projects'      scroll={el => scrollWithOffset(el, 100)} onClick={closeMenu}>Projects</NavLink></li>
            <li><NavLink to='/#skills'        scroll={el => scrollWithOffset(el, 100)} onClick={closeMenu}>My Skills</NavLink></li>
            <li><NavLink to='/#contacts'      scroll={el => scrollWithOffset(el, 100)} onClick={closeMenu}>Hire Me</NavLink></li>
          </ul>
        </nav>
      </div>
    )
  }

  function renderHamburgerMenu() {
    return (
      <div className={`mobile-menu-block ${menuIsOpen ? 'open' : ''}`}>
        <div
          className="menu-icon"
          onClick={handleMenuClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="menu-overlay">
          {renderNavigationBlock()}
        </div>
      </div>
    )
  }

  return (
    <>
      <header className="site-header">
        <div className="content-container">
          <div className="logo-block">
            <a href='/'>alX</a>
          </div>
          {renderNavigationBlock()}
          {renderHamburgerMenu()}
        </div>
      </header>
    </>
  )
}

export default Header;