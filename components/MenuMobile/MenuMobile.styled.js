// ****************************************/
// MenuMobile
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const MenuMobileStyles = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  ${media.tabletPortraitAndBelow`
    display: flex;
    flex-direction: column;
    background: white;
  `}
  ${media.tabletLandscapeAndBelow`
    top: ${(props) => props.theme.sitePaddingTopMobile};
  `}

  .close-container {
    display: block;
    justify-content: flex-start;
    padding: 2.5rem 2.3rem;
    ${media.smallDesktopAndBelow`
      padding: 25px 23px;
    `}
  }

  .logo-wrapper {
    display: relative;
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
  }

  .logo-wrapper svg {
    display: flex;
    justify-content: center;
  }

  .menu-items {
    position: relative;
    display: block;
    background: white;
    width: 100%;
    height: 100%;
  }

  .menu-items a {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 1px solid ${(props) => props.theme.blue};
    font-size: ${font.p};
    ${media.smallDesktopAndBelow`
      padding: 12px 20px;
      font-size: ${font.pMobile};
    `}
    ${media.tabletPortraitAndBelow`
      padding: 38px 9px;
      margin: 0px;
    `}
  }

  .menu-items a svg path {
    stroke: ${(props) => props.theme.blue};
  }

  .menu-items a:hover {
    color: white;
    background: ${(props) => props.theme.blue};
  }

  .menu-items a:hover svg path {
    stroke: white;
  }

  .menu-items a span {
    position: relative;
    top: 0.2rem;
    ${media.smallDesktopAndBelow`
      top: 2px;
    `}
  }

  .menu-items a,
  .menu-items a svg path {
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out,
      fill 0.2s ease-in-out, stroke 0.2s ease-in-out;
  }

  .menu-items > a:first-child {
    border-top: 1px solid ${(props) => props.theme.blue};
  }

  .contact {
    width: 100%;
    height: 2.5 rem;
    padding-top: 5.4rem;
    display: flex;
    align-items: bottom;
    justify-content: space-between;
    width: 100%;
    ${media.tabletLandscapeAndBelow`
    top: ${(props) => props.theme.sitePaddingTopMobile};
  `}
  }
`;

export default MenuMobileStyles;
