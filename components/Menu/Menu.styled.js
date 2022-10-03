// ****************************************/
// Menu
// ****************************************/

import styled from "styled-components";
import { font, media } from "../Styles";

const MenuStyles = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: ${(props) => props.theme.blue};

  .menu-items {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    ${media.tabletPortraitAndBelow`
      display: none;
    `}
  }

  .menu-items a {
    padding: 0.6rem 0.9rem;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    border: 1px solid white;
    margin: 0.9rem;
    ${media.smallDesktopAndBelow`
      padding: 6px 9px;
      margin: 9px;
    `}
    ${media.tabletPortraitAndBelow`
      display: none;
    `}
  }

  .menu-items a:hover {
    background: white;
    color: ${(props) => props.theme.blue};
  }
  ${media.tabletPortraitAndBelow`
      display: none;
    `}
`;
export default MenuStyles;