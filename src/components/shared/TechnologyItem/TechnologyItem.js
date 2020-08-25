import React from 'react';
import './TechnologyItem.scss';
import siteData from '../../../siteData.json';
import { Menu, Dropdown } from 'antd';

const TechnologyItem = props => {
  const { projectsData, technologiesSortedData } = props;

  const dropdownMenuItems = (
    projectsData.map((elem, i) => {
      return (
        <Menu.Item key={i}>
          <a href="http://www.alipay.com/" className="dropdown-menu-item">
            <img src={elem.image_small} className="project-image" alt={elem.title} />
            <div className="project-title">{elem.title}</div>
          </a>
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
    <Dropdown overlay={dropdownMenu} trigger={['click']}>
      <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <div className="tech-item">
            <img src={technologiesSortedData.image} className="tech-image" alt={technologiesSortedData.name} />
            <div className="tech-name">{technologiesSortedData.name}</div>
        </div>
      </div>
    </Dropdown>
  )
}

export default TechnologyItem;