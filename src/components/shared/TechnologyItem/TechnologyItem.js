import React from 'react';
import './TechnologyItem.scss';
import siteData from '../../../siteData.json';
import { Link } from "react-router-dom";
import { Menu, Dropdown } from 'antd';
import Loader from '../../shared/Loader/Loader';
import 'antd/dist/antd.dark.min.css';

const TechnologyItem = props => {
  const { projectsData, technologiesSortedData } = props;

  const dropdownMenuItems = (
    projectsData.map((elem, i) => {
      return (
        <Menu.Item key={i}>
          <Link to={elem.path} className="dropdown-menu-item">
            <div className="image-container">
              <Loader />
              <img src={elem.bg_images.square_sm} className="image" alt="" />
            </div>
            <div className="project-title-container">
              <span>{elem.title}</span>
            </div>
          </Link>
        </Menu.Item>
      )  
    })
  )

  const dropdownMenu = (
    <Menu>
      <header className="dropdown-menu-head">{siteData.home.skills.dropdown_menu_head} ({projectsData.length})</header>
      {dropdownMenuItems}
    </Menu>
  );

  return (
    <Dropdown
      overlay={dropdownMenu}
      trigger={['click']}
      getPopupContainer={trigger => trigger.parentElement}
    >
      <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <div className="tech-item">
            <div className="image-container">
              <img src={technologiesSortedData.image} className="tech-image" alt="" />
            </div>
            <div className="tech-name">{technologiesSortedData.name}</div>
        </div>
      </div>
    </Dropdown>
  )
}

export default TechnologyItem;