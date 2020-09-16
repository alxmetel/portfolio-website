import React, { useState, useEffect } from 'react';
import './InputTextAreaField.scss';
import validate from '../../../utilities/validate';

const InputTextAreaField = props => {
  const { id, name, label, value, setValue, valid, setValid, minRows = 5, maxRows = 50, displayValidation, validationRules, validationErrors } = props;

  const [rows, setRows] = useState(minRows);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    validateField();
  }, [value]);

  function handleChange(event) {
    setValue(event.target.value);
    resizeTextArea(event);
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

  function resizeTextArea(event) {
    const textareaLineHeight = 24; // Depends on the CSS line-height
    const previousRows = event.target.rows;

    event.target.rows = minRows; // Reset number of rows in textarea

    const currentRows = ~~((event.target.scrollHeight - 44) / textareaLineHeight); // Minus number depends on the padding (0 - padding: 8px 0)

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    setRows(currentRows < maxRows ? currentRows : maxRows);
  }

  return (
    <div className={`input-text-area-field-container ${!valid && displayValidation ? 'invalid' : ''} ${value !== '' ? 'filled' : ''}`}>
      <textarea
        className="input-field"
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={e => handleChange(e)}
      />
      <label className="input-field-label" htmlFor={id}>{label}</label>
      <div className="input-field-error">{errorText}</div>
    </div>
  )
}

export default InputTextAreaField;