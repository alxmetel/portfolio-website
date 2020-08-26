import React from 'react';
import './InputTextField.scss';

const InputTextField = props => {
  const { id, label } = props;

  return (
    <div className="input-text-field-container">
      <input className="input-field" type="text" id={id} />
      <label className="input-field-label" for={id}>{label}</label>
      <div className="input-field-error">Error</div>
    </div>
  )
}

export default InputTextField;