// ****************************************/
// Nav
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const NavStyles = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 2rem;
  background: ${(props) => props.theme.blue};
  z-index: 3;

  svg {
    position: relative;
  }

  .burger-svg {
    margin-right: 1rem;
    top: 0.1rem;
    background: red;
    ${media.smallDesktopAndBelow`
      margin-right: 10px;
      top: 1px;
    `}
  }

  .burger {
    z-index: 2;
  }

  .chevron-svg {
    margin-left: 1rem;
    ${media.smallDesktopAndBelow`
      margin-left: 10px;
    `}
  }

  button span,
  a,
  span {
    font-size: ${font.h4};
    color: white;
    ${media.smallDesktopAndBelow`
      font-size: ${font.pTablet};
    `}
    ${media.tabletLandscapeAndBelow`
      font-size: ${font.pMobile};
    `}
  }

  button {
    background: red;
  }

  .m-burger-svg {
    display: none;
    ${media.tabletPortraitAndBelow`
      display: block
    `}
  }

  .menu span,
  .menu .burger-svg {
    ${media.tabletPortraitAndBelow`
      display: none;
    `}
  }
`;

export default NavStyles;
