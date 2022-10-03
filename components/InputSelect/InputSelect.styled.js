// ****************************************/
// Input Select
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const InputSelectStyles = styled.section`
  position: relative;
  width: 100%;

  .dropdown {
    position: absolute;
    top: 0;
    right: 0;
    height: 9rem;
    pointer-events: none;
    padding-right: 20px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    ${media.smallDesktopAndBelow`
			height: 90px;
      margin-top: 20px;
		`};
    ${media.tabletLandscapeAndBelow`
      height: 74px;
      margin-top: 17px;
    `}

  }

  .dropdown svg {
    position: relative;
    transition: transform 0.25s ease-out;
    transform: rotate(0deg);
  }

  &,
  button,
  .react-select__input input,
  p {
    font-family: ${font.family300};
    font-size: ${font.p};
    line-height: 1.67;
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
    `};
    ${media.mobileOnly`
      font-size: ${font.inputMobile};
    `};
  }

  &,
  span,
  button,
  p {
    font-size: ${font.p};
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
    `};
    ${media.mobileOnly`
      ${font.inputMobile};
    `}
  }

  & > div {
    border-radius: 0;
    border: 1px solid transparent;
    transition: border 0.25 ease-in-out;
  }

  .react-select__menu {
    margin-top: 0;
    font-size: 0;
    top: calc(100% - 1px);
  }

  span.label-title {
    position: relative;
    display: block;
    color: black;
    font-family: ${font.family100};
    font-size: ${font.p};
    padding-bottom: 1rem;
    ${media.smallDesktopAndBelow`
      padding-bottom: 10px;
      font-size: ${font.pMobile};
  `};
  }

  .react-select__menu-list {
    padding: 0;
    top: -1px;
  }

  .react-select__control {
    border-color: transparent;
  }

  &.has-value .react-select__control {
    border-color: white;
  }

  .react-select__option,
  .react-select__input input {
    font-size: ${font.p};
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
    `};
    ${media.mobileOnly`
      font-size: ${font.pInputMobile};
    `};
  }

  .react-select__option--is-selected,
  .react-select__option--is-focused {
    background: black;
    color: white;
  }

  .react-select__placeholder {
    color: ${(props) => props.theme.grey400};
  }

  .react-select__value-container {
    padding: 0.4rem 1.2rem 0.4rem 1.2rem;
    ${media.smallDesktopAndBelow`
      padding: 4px 20px 4px 14px;
    `}
  }
  
  &.is-active {
    z-index: 10;
  }

  &.is-active svg {
    transform-origin: 50% 2.5px;
    transform: rotate(180deg);
  }

  .dropdown svg circle,
  .dropdown svg path {
    stroke: black;
  }

  .react-select__control {
    border-color: white;
    transition: border-color 0.25s ease-in-out, background 0.25s ease-in-out;
  }

  &.has-value .react-select__control {
    border-color: white;
  }

  &.has-error .react-select__control {
    border-color: ${(props) => props.theme.error};
    background: ${(props) => props.theme.errorLight};
  }

  span.error {
    font-family: ${font.family100};
    color: ${(props) => props.theme.error};
    font-size: ${font.p};
    margin-top: 1rem;
    display: block;
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
      margin-top: 10px;
    `};
  }
`;

export default InputSelectStyles;
