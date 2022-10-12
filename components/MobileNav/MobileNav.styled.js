// ****************************************/
// Nav
// ****************************************/

import styled from "styled-components";
import { font, media } from "../Styles";

const MobileNavStyled = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 2rem;
  background: ${(props) => props.theme.blue};
  z-index: 3;
  display: none;
  ${media.tabletPortraitAndBelow`
      display: flex;
    `}

  svg {
    position: relative;
  }

  .menu svg {
    top: 0.1rem;
    width: 2rem;
    height: 2rem;
    object-fit: contain;
    ${media.smallDesktopAndBelow`
      width: 20px;
      height: 20px;
    `}
  }

  .menu {
    z-index: 2;
  }

  .close-svg {
    margin-right: 1rem;
    top: 0.1rem;
    background: none;
    ${media.tabletLandscapeAndBelow`
      margin-right: 10px;
      top: 1px;
    `}
  }

  .close {
    z-index: 2;
  }

  .chevron-svg {
    margin-left: 1rem;
    ${media.smallDesktopAndBelow`
      margin-left: 10px;
    `}
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${font.pMobile};
    ${media.tabletPortraitAndBelow`
      width: 100%;
      text-align: center;
    `}
  }

  button span,
  a,
  span {
    color: white;
    ${media.smallDesktopAndBelow`
    font-size: ${font.pMobile};;
    `}
    ${media.tabletLandscapeAndBelow`
    font-size: ${font.pMobile};;
    `}
  }

  button {
    background: none;
  }

  .menu span,
  .menu .menu-svg .chevron-svg {
    ${media.tabletPortraitAndBelow`
      display: none;
    `}
    ${media.tabletPortraitAndBelow`
      display: flex;
    `}
  }
`;

export default MobileNavStyled;
