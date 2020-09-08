import React, { useState } from 'react';
import './InputTextAreaField.scss';

const InputTextAreaField = props => {
  const { id, label, minRows, maxRows = 50 } = props;

  const [value, setValue] = useState('');
  const [rows, setRows] = useState(minRows);

  function handleChange(event) {
    const textareaLineHeight = 24; // Depends on the CSS line-height
    const previousRows = event.target.rows;
    
    event.target.rows = minRows; // Reset number of rows in textarea

    console.log(event.target.scrollHeight);
    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    setValue(event.target.value);
    setRows(currentRows < maxRows ? currentRows : maxRows);
  }

  return (
    <div className="input-text-area-field-container">
      <textarea
        className="input-field"
        id={id}
        rows={rows}
        value={value}
        placeholder={label}
        onChange={e => handleChange(e)}
      />
      <div className="input-field-error">Error</div>
    </div>
  )
}

export default InputTextAreaField;