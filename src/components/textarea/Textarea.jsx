import React from 'react';
import './Textarea.css';

function ReviewContect({
  name,
  type,
  id,
  placeholder,
  value,
  onChange,
  className,
}) {
  return (
    <textarea
      className={`textarea ${className}`}
      name={name}
      type={type}
      value={value}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default ReviewContect;
