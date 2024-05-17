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
          onChange={onChange}
          value={value}
        />
      </label>
    </>
  );
}

export default InputContent;
