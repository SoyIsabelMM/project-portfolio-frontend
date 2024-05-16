import React from 'react';
import './Textarea.css';

function ReviewContect({
  name,
  type,
  id,
  placeholder,
  required,
  value,
  onChange,
}) {
  return (
    <textarea
      className="textarea"
      name={name}
      type={type}
      value={value}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default ReviewContect;
