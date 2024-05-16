import React from 'react';
import './Textarea.css';

function ReviewContect({ name, type, id, placeholder, required }) {
  return (
    <textarea
      className="textarea"
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default ReviewContect;
