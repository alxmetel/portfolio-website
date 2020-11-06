import React from 'react';
import './Footer.scss';
import siteData from '../../../siteData.json';

const Footer = () => {
  return (
    <footer id="site-footer">
      <div className="footer-text">{siteData.footer}</div>
    </footer>
  )
}

export default Footer;