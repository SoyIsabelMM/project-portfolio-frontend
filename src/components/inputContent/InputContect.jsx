import './InputContent.css';

function InputContent({
  type,
  labelName,
  placeholder,
  onChange,
  required,
  className,
  classNameInput,
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
        />
      </label>
    </>
  );
}

export default InputContent;
