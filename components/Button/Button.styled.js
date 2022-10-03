// ****************************************/
// Button
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const ButtonStyles = styled.button`
  font-family: ${font.family100};
  font-size: ${font.p};
  text-align: center;
  outline: 0;
  transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
  ${media.smallDesktopAndBelow`
    font-size: ${font.pMobile};
  `}

  &.primary {
    padding: 1rem 2.2rem 1.1rem 2.2rem;
    width: 100%;
    border: 1px solid red;
    ${media.smallDesktopAndBelow`
      padding: 10px 22px 11px 22px;
      border-radius: 22px;
		`}
  }

  &.primary.is-active,
  &.primary:active,
  &.primary:hover {
    background: blue;
    color: blue;
  }

  &.primary:hover span {
    color: blue;
  }

  &:hover {
    cursor: pointer;
  }

  &.is-disabled {
    pointer-events: none;
    opacity: 0.2;
  }

  &.primary.outline {
    background: blue;
    color: white;
    border: 1px solid white;
    &:hover {
      border: 1px solid white;
    }
  }

  &.secondary {
    font-family: ${font.family200};
    @supports (font-variation-settings: normal) {
      font-family: ${font.family200VF};
    }
  }

  &.secondary,
  &.tertiary {
    position: relative;
    font-size: ${font.p};
    background-color: transparent;
    ${media.smallDesktopAndBelow`
      font-size: ${font.pTablet};
    `};
    ${media.tabletPortraitAndBelow`
      font-size: ${font.pMobile};
    `}
  }

  &.secondary {
    text-decoration: underline;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: 1px;
    text-underline-position: under;
  }

  &.tertiary {
    color: black;
    display: block;
    width: 100%;
    border: 1px solid blue;
    &:hover {
      color: white;
    }
  }
`;

export default ButtonStyles;
