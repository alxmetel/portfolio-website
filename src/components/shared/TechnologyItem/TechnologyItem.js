import React from 'react';
import './TechnologyItem.scss';
import siteData from '../../../siteData.json';
import { Link } from "react-router-dom";
import { Menu, Dropdown } from 'antd';
// import 'antd/lib/menu/style/css';
// import 'antd/lib/dropdown/style/css';

const TechnologyItem = props => {
  const { projectsData, technologiesSortedData } = props;

  const dropdownMenuItems = (
    projectsData.map((elem, i) => {
      return (
        <Menu.Item key={i}>
          <Link to={elem.path} className="dropdown-menu-item">
            <img src={elem.bg_images.square_sm} className="project-image" />
            <div className="project-title">{elem.title}</div>
          </Link>
        </Menu.Item>
      )  
    })
  )

  const dropdownMenu = (
    <Menu>
      <header className="dropdown-menu-head">{siteData.home.skills.dropdown_menu_head}</header>
      {dropdownMenuItems}
    </Menu>
  );

  return (
    <Dropdown
      overlay={dropdownMenu}
      trigger={['click']}
      getPopupContainer={trigger => trigger.parentElement} // Fix the bug with dropdown menu scrolling with the page when parent is 100vh
    >
      <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <div className="tech-item">
            <div className="image-container">
              <img src={technologiesSortedData.image} className="tech-image" />
            </div>
            <div className="tech-name">{technologiesSortedData.name}</div>
        </div>
      </div>
    </Dropdown>
  )
}

export default TechnologyItem;