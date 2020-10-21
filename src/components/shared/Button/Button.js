import React from 'react';
import './Button.scss';

const Button = props => {
  const { type, title, onClick } = props;

  if (type === "submit") {
    return (
      <button
        type="submit"
        className="button"
        onClick={onClick}
      >
        <span>{title}</span>
      </button>
    )
  } else {
    return (
      <button
        className="button"
        onClick={onClick}
      >
        <span>{title}</span>
      </button>
    )
  }
}

export default Button;