import React, { useRef, useState, useEffect } from "react";
import InputStyles from "./Input.styled";

export default function Input({
  title,
  name,
  type,
  autoComplete,
  pattern,
  autoFocus,
  required,
  className,
  onChange,
  hasError,
  getInputProps,
  variant,
  onInput,
  error,
  maxLength,
  defaultValue,
  fields,
  setField,
  onBlur,
  onFocus,
  placeholder,
}) {
  const elem = useRef();
  const [value, setValue] = useState(defaultValue || "");
  const [hasValue, setHasValue] = useState(false);

  const onTyping = (e) => {
    // if (onInput) {
    //   onInput(e, elem.current.value);
    // }
    // if (elem.current && elem.current.value !== "") {
    //   setHasValue(true);
    //   return;
    // }
    // setHasValue(false);
  };

  const onValueChange = (e) => {
    setValue(elem.current.value);
    if (onChange) {
      onChange(e);
    }
    if (onInput) {
      onInput(e, elem.current.value);
    }
    if (elem.current && elem.current.value !== "") {
      setHasValue(true);
      return;
    }
    setHasValue(false);
  };

  useEffect(() => {
    elem.current.addEventListener("input", onTyping);

    if (defaultValue && defaultValue !== "") {
      if (fields && setField) {
        const newField = { ...fields };
        newField[name] = defaultValue;
        setField(newField);
      }
      setHasValue(true);
    }
    return () => {
      if (elem.current) {
        elem.current.removeEventListener("input", onTyping);
      }
    };
  }, []);

  const resetState = (e) => {
    e.preventDefault();
    setValue("");
    setHasValue(false);
  };

  return (
    <InputStyles className={`input-container ${className || ""} ${variant || ""}`}>
      <label htmlFor={`${name}`}>
				{title && <span className="label-title">{title}</span>}
        <input
          ref={elem}
          className={`${name}-input ${hasError ? "has-error" : ""} ${hasValue ? "has-value" : ""}`}
          name={name}
          type={type || "text"}
          autoComplete={autoComplete}
          autoFocus={autoFocus ? autoFocus : false}
          required={required && required}
          onChange={onValueChange}
          placeholder={placeholder}
          onBlur={(e) => {
            if (onBlur) onBlur(e);
          }}
          onFocus={(e) => {
            if (onFocus) onFocus(e);
          }}
          pattern={pattern}
          maxLength={maxLength}
          value={value}
          {...(getInputProps ? getInputProps() : [])}
        />
      </label>
      {hasError && error ? <span className="error">{error}</span> : null}
      <button aria-hidden="true" className="reset-btn" onClick={resetState}>
        Reset
      </button>
    </InputStyles>
  );
}
