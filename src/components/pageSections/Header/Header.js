import React, { useState, useEffect } from 'react';
import './Header.scss';
import smoothscroll from 'smoothscroll-polyfill';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { toggleBodyNoscroll } from '../../../utilities/domFunctions';
import siteData from '../../../siteData.json';
import logo from '../../../assets/alx-logo.png';

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
            <li><NavLink to='/#header-video'  scroll={el => scrollWithOffset(el, 0)}    onClick={closeMenu}>{siteData.nav_bar.home}</NavLink></li>
            <li><NavLink to='/#about'         scroll={el => scrollWithOffset(el, -630)} onClick={closeMenu}>{siteData.nav_bar.about}</NavLink></li>
            <li><NavLink to='/#projects'      scroll={el => scrollWithOffset(el, -450)} onClick={closeMenu}>{siteData.nav_bar.projects}</NavLink></li>
            <li><NavLink to='/#skills'        scroll={el => scrollWithOffset(el, -450)} onClick={closeMenu}>{siteData.nav_bar.skills}</NavLink></li>
            <li><NavLink to='/#contacts'      scroll={el => scrollWithOffset(el, -450)} onClick={closeMenu}>{siteData.nav_bar.contacts}</NavLink></li>
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
      <header id="site-header">
        <div className="content-container">
          <div className="logo-block">
            <a href='/'>
              <img src={logo} alt="logo" />
            </a>
          </div>
          {renderNavigationBlock()}
          {renderHamburgerMenu()}
        </div>
      </header>
    </>
  )
}

export default Header;