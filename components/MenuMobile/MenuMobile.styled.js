// ****************************************/
// MyModule
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const MenuMobileStyles = styled(motion.nav)`
  ${media.tabletLandscapeAndBelow`
    top: ${(props) => props.theme.sitePaddingTopMobile};
  `}

  .close-container {
    display: flex;
    justify-content: flex-end;
    padding: 2.5rem 2.3rem;
    ${media.smallDesktopAndBelow`
      padding: 25px 23px;
    `}
  }

  .close-container svg path {
    stroke: red;
  }

  .menu-items {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0px;
  }

  .menu-items a {
    display: block;
    width: 100%;
    justify-content: space-between;
    padding: 0px;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 1px solid blue;
    font-size: 2.1rem;
    ${media.smallDesktopAndBelow`
      padding: 12px 20px;
    `}

    ${media.tabletPortraitAndBelow`
    padding: 38px 9px;
      margin: 0px;
      font-size: 21px;
    `}
  }

  .menu-items a:hover {
    color: white;
    background: ${(props) => props.theme.blue};
  }

  .menu-items a span {
    position: relative;
    display: block;
    top: 0.2rem;
    ${media.smallDesktopAndBelow`
      top: 2px;
    `}
  }

  .menu-items a,
  .menu-items a svg rect {
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out,
      fill 0.2s ease-in-out, stroke 0.2s ease-in-out;
  }

  .menu-items a svg rect {
    fill: white;
  }

  .menu-items a:hover svg rect {
    fill: red;
  }
`;

export default MenuMobileStyles;
