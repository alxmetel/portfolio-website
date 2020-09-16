import React from 'react';
import './SubmitButton.scss';

const SubmitButton = props => {
  const { title, onClick } = props;

  return (
    <button
      type="submit"
      className="button"
      onClick={onClick}
    >
      <span>{title}</span>
    </button>
  )
}

export default SubmitButton;