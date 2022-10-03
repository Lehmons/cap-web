import React, { useState, useEffect } from "react";
import InputSelectStyles from "./InputSelect.styled";
import Select from "react-select";
import Dropdown from './dropdown.svg';

export default function InputSelect({
  isMenuOpen,
  handleChange,
  setMenuOpen,
  setMenuClosed,
  options,
  title,
  placeholder,
  hasError,
  error,
  name,
  defaultValue,
  selectValue,
}) {
  const [value, setValue] = useState({
    value: "",
    label: placeholder || "Country",
  });
  const [hasValue, setHasValue] = useState(false);

  const onChange = (e) => {
    handleChange(e);
    setValue(e);
    if (selectValue && selectValue !== "") {
      setHasValue(true);
      return;
    }
    setHasValue(false);
  };

  useEffect(() => {
    if (defaultValue) {
      const filtered = options.filter((item) => item.value === defaultValue)[0];
      if (filtered) {
        setHasValue(true);
        setValue(filtered);
      }
    }
  }, [defaultValue]);

  return (
    <InputSelectStyles
      className={`select-wrapper ${name}-input ${
        isMenuOpen ? "is-active" : "is-inactive"
      } ${hasError ? "has-error" : ""} ${hasValue ? "has-value" : ""}`}
    >
      <section>
        <span className="label-title">{title}</span>
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          value={value}
          onChange={onChange}
          options={options}
          components={{
            DropdownIndicator: null,
            IndicatorSeparator: null,
          }}
          onMenuOpen={setMenuOpen}
          onMenuClose={setMenuClosed}
          customStyles={{}}
          name={name}
          placeholder={placeholder || "Country"}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary: "black",
              primary75: "black",
              primary50: "black",
              danger: "#fbeb37",
              dangerLight: "#fbeb37",
            },
          })}
        />
        <section className="dropdown">
          <Dropdown/>
        </section>
      </section>
      {hasError && error ? <span className="error">{error}</span> : null}
    </InputSelectStyles>
  );
}
