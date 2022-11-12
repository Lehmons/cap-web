// ****************************************/
// Page
// ****************************************/

import styled from "styled-components";
import { font, media } from "../Styles";
import { motion } from "framer-motion";

const PageStyles = styled(motion.section)`
  width: 50%;
  padding-top: calc(46.5vh - 8rem);
  ${media.tabletPortraitAndBelow`
    width:100%;
  `}

  & > .page-text:nth-child(n+2) {
    padding-top: 6rem;
    ${media.smallDesktopAndBelow`
      padding-top: 60px;
    `}
  }

  .text div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 2rem;
    ${media.smallDesktopAndBelow`
      row-gap: 20px;
    `}
  }

  .text h1,
  .text h2,
  .text h3,
  .text p,
  .text ol,
  .text ul,
  .text a {
    color: ${(props) => props.theme.blue};
  }

  .text h1,
  .text h2,
  .text h3 {
    text-transform: uppercase;
  }

  .text a {
    text-align: center;
    outline: 0;
    transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
    width: 100%;
    color: ${(props) => props.theme.blue};
    background: white;
    font-size: ${font.p};
    display: inline-block;
    width: auto;
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
		`}
  }

  .text a.is-active,
  .text a:active,
  .text a:hover {
    background: white;
    color: ${(props) => props.theme.blue};
  }

  .text a:hover span {
    color: ${(props) => props.theme.blue};
  }

  .text a:hover {
    cursor: pointer;
  }

  .page-image-text + .page-image-text {
    ${media.tabletLandscapeAndBelow`
      padding-top: 20px;
    `}
  }

  & > .page-text:nth-child(1) {
    padding-top: 8rem;
    ${media.tabletLandscapeAndBelow`
      padding-top: 80px;
    `}
  }

  .image-block {
    padding: 2.5rem 2rem 6rem 2rem;
  }

  .linkedPage {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .linkedPage linktitle {
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
`;

export default PageStyles;
