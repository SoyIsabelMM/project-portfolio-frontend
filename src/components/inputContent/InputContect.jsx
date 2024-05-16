import './InputContent.css';

function InputContent({
  type,
  labelName,
  placeholder,
  onChange,
  required,
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
          onChange={onChange}
          required={required}
          value={value}
        />
      </label>
    </>
  );
}

export default InputContent;
