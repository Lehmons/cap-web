// ****************************************/
// Page
// ****************************************/

import styled from "styled-components";
import { font, media } from "../Styles";
import { motion } from "framer-motion";

const PageStyles = styled(motion.section)`
  .text {
    padding-top: 6rem;
    width: 100%;
    ${media.smallDesktopAndBelow`
      padding-top: 60px;
    `}
    ${media.tabletLandscapeAndBelow`
      padding-left: ${(props) => props.theme.sitePaddingLeftRightMobile};
      padding-right: ${(props) => props.theme.sitePaddingLeftRightMobile};
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
    color: red;
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
    padding: 1rem 2.2rem 1.1rem 2.2rem;
    width: 100%;
    color: red;
    background: white;
    border-radius: 2.2rem;
    font-size: ${font.p};
    margin-top: 1rem;
    display: inline-block;
    width: auto;
    ${media.smallDesktopAndBelow`
      padding: 10px 22px 11px 22px;
      border-radius: 22px;
      margin-top: 10px;
      font-size: ${font.pMobile};
		`}
  }

  .text a.is-active,
  .text a:active,
  .text a:hover {
    background: white;
    color: red;
  }

  .text a:hover span {
    color: red;
  }

  .text a:hover {
    cursor: pointer;
  }

  .event-container {
    display: flex;
    flex-wrap: wrap;
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
`;

export default PageStyles;
