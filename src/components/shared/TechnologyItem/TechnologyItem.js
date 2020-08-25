import React from 'react';
import './TechnologyItem.scss';

import { Menu, Dropdown } from 'antd';

const TechnologyItem = props => {
  const { projectsData, technologiesSortedData } = props;

  const dropdownMenuItems = (
    projectsData.map((elem, i) => {
      return (
        <Menu.Item key={i}>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            {elem.title}
          </a>
        </Menu.Item>
      )  
    })
  )

  const dropdownMenu = (
    <Menu>
      <div>Where the technology was used:</div>
      {dropdownMenuItems}
    </Menu>
  );

  return (
    <Dropdown overlay={dropdownMenu}>
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