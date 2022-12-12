// ****************************************/
// Input
// ****************************************/

import styled from "styled-components";
import { media, font } from "../Styles";

const InputStyles = styled.section`
  font-size: 0;

  input.has-error {
    background: ${(props) => props.theme.errorLight};
    border-color: ${(props) => props.theme.error};
    color: ${(props) => props.theme.error};
  }

  label {
    font-size: ${font.p};
		color: ${props => props.theme.blue};
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
    `};
  }

  input {
    font-size: ${font.p};
		color: white;
		background: ${props => props.theme.blue};
		margin-top: 1.2rem;
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
			margin-top: 12px;
    `};
    ${media.mobileOnly`
      ${font.inputMobile};
    `}
  }

  label + input {
    position: relative;
    display: block;
    margin-top: 1.2rem;
    ${media.smallDesktopAndBelow`
      margin-top: 12px;
    `}
  }

  input {
    position: relative;
    display: block;
    border: 1px solid transparent;
    width: 100%;
    padding: 0.9rem 2rem 0.9rem 2rem;
    transition: all ease-in-out 0.25s;
    border-radius: 0;
    ${media.smallDesktopAndBelow`
			padding: 9px 20px 9px 20px;
		`};
		${media.tabletPortraitAndBelow`
			font-size: ${font.pInputMobile};
		`}
    ${media.minDevicePixelRatio2`
      border: 0.5px solid transparent;
    `};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input.has-value,
  input:hover,
  input:focus,
  input:active {
    border: 1px solid ${(props) => props.theme.grey400};
    outline: none;
    ${media.minDevicePixelRatio2`
      border: 0.5px solid ${(props) => props.theme.grey400};
    `};
  }

  input::-webkit-contacts-auto-fill-button {
    right: 1.6rem;
    ${media.smallDesktopAndBelow`
			right: 16px;
		`};
  }

  &.secondary input {
    background: transparent;
  }

  &.secondary input:-webkit-autofill,
  &.secondary input:-webkit-autofill:hover,
  &.secondary input:-webkit-autofill:focus,
  &.secondary input.has-value,
  &.secondary input {
    border-left: initial;
    border-right: initial;
    border-top: initial;
  }

  input:focus + span + span,
  input.has-value + span + span {
    opacity: 1;
  }

  input.hasError {
    color: ${(props) => props.theme.error};
  }

  input::placeholder {
    color: ${(props) => props.theme.grey400};
  }

  input.has-value + span {
    transition: color 0.25s ease-in-out, translate 0.25s ease-in-out;
  }

  span.error {
    color: ${(props) => props.theme.error};
    font-size: ${font.p};
    margin-top: 1rem;
    display: block;
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
      margin-top: 10px;
    `};
  }

  .reset-btn {
    display: none;
    user-select: none;
    pointer-events: none;
  }
`;

export default InputStyles;
