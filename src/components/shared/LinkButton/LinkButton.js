import React from 'react';
import './LinkButton.scss';
import { Link } from "react-router-dom";

const LinkButton = props => {
  const { path, title } = props;

  return (
    <Link
      to={path}
      className="button"  
    >
      <span>{title}</span>
    </Link>
  )
}

export default LinkButton;