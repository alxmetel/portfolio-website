import React, { useState, useEffect } from 'react';
import './InputTextField.scss';
import validate from '../../../utilities/validate';

const InputTextField = props => {
  const { id, name, label, value, setValue, valid, setValid, displayValidation, validationRules, validationErrors } = props;

  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    validateField();
  }, [value]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function validateField() {
    const validationResult = validate(value, validationRules);

    if (validationResult === true) {
      setErrorText('');
      setValid(true);
    } else {
      setErrorText(validationErrors[validationResult]);
      setValid(false);
    }
  }

  return (
    <div className={`input-text-field-container ${!valid && displayValidation ? 'invalid' : ''} ${value !== '' ? 'filled' : ''}`}>
      <input
        className="input-field"
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={e => handleChange(e)}
      />
      <label className="input-field-label" htmlFor={id}>{label}</label>
      <div className="input-field-error">{errorText}</div>
    </div>
  )
}

export default InputTextField;