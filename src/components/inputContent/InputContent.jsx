import PropTypes from 'prop-types';

import './InputContent.css';

function InputContent({
  type,
  labelName,
  placeholder,
  onChange,
  className,
  classNameInput,
  value,
}) {
  return (
    <>
      <label className={`input-content__label ${className}`}>
        {labelName}
        <input
          className={`input-content__input ${classNameInput}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}

InputContent.propTypes = {
  type: PropTypes.string,
  labelName: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  classNameInput: PropTypes.string,
  value: PropTypes.string,
};

export default InputContent;
