import React from "react";
import ButtonStyles from "./Button.styled";
import rawMarkup from "../../lib/rawMarkup";

export default function Button({
  text,
  html,
  spanText,
  variant,
  className,
  isActive,
  onClick,
  isDisabled,
  type,
}) {
  return (
    <ButtonStyles
      onClick={onClick}
      type={type || "button"}
      className={`btn ${variant || "primary"} ${className || ""} ${
        isActive ? "is-active" : ""
      } ${isDisabled ? "is-disabled" : ""}
      `}
    >
      {html ? (
        <span dangerouslySetInnerHTML={html && rawMarkup(html.content)} />
      ) : (
        <span>
          {text}
          {spanText ? <span>{spanText}</span> : ""}
        </span>
      )}
    </ButtonStyles>
  );
}
