// ****************************************/
// Desktop Menu
// ****************************************/

import styled from "styled-components";
import { font, media } from "../Styles";

const DesktopMenuStyled = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: ${(props) => props.theme.blue};
  display: flex;
  ${media.tabletPortraitAndBelow`
      display: none;
    `}
  ${media.tabletLandscapeAndBelow`
      display: none;
    `}

  .menu-items {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    ${media.tabletLandscapeAndBelow`
      flex-direction: column;
    `}
  }

  .menu-items a {
    padding: 0.6rem 0.9rem;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    border: 1px solid white;
    margin: 0.9rem;
    font-size: 1.2rem;
		transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
    ${media.smallDesktopAndBelow`
      padding: 6px 9px;
      margin: 9px;
      font-size: 12px;
    `}
    ${media.tabletPortraitAndBelow`
      display: none;
    `}
  }

	.menu-items a.is-active,
  .menu-items a:hover {
    background: white;
    color: ${(props) => props.theme.blue};
  }
  ${media.smallDesktopAndBelow`
      display: flex;
    `}
  ${media.tabletPortraitAndBelow`
      display: none;
    `}
`;
export default DesktopMenuStyled;
