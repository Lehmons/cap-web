// ****************************************/
// Page
// ****************************************/

import styled from "styled-components";
import { font, media } from "../Styles";
import { motion } from "framer-motion";

const PageStyles = styled(motion.section)`
  width: 50%;
  padding-top: calc(50vh - 8.5rem);
  ${media.smallDesktopAndBelow`
		padding-top: calc(50vh - 85px);
	`}
  ${media.tabletPortraitAndBelow`
    width:100%;
    padding-top: 0;
  `}


  & > .page-text:nth-child(n+2) {
    padding-top: 6rem;
    ${media.smallDesktopAndBelow`
      padding-top: 60px;
    `}
    ${media.tabletPortraitAndBelow`
      padding-top: 20px;
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

  .linked-page {
    color: ${(props) => props.theme.blue};
    font-size: ${font.p};
    display: inline-block;
    margin-top: 2.5rem;
    width: auto;
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
      margin-top: 25px;
    `}
  }

  .linked-page svg {
    position: relative;
    display: inline-block;
    height: 14px;
    width: 25px;
    margin-top: 0.8rem;
    ${media.smallDesktopAndBelow`
      margin-top: 8px;
    `}
    ${media.tabletPortraitAndBelow`
      height: 10px;
      width: 20px;
    `}
    ${media.tabletPortraitAndBelow`
      margin-top: 0;
    `}
  }

  .linked-page svg path {
    stroke: ${(props) => props.theme.blue};
  }

  .linked-page span {
    display: inline-block;
    padding-left: 5.9rem;
    padding-right: 0.5rem;
    ${media.smallDesktopAndBelow`
    padding-left: 59px;
    padding-right: 5px;
      `}
    ${media.tabletPortraitAndBelow`
      padding-left: 20px;
      padding-right: 2px;
    `}
  }

  & > .page-text:nth-child(1) {
    padding-top: 8rem;
    ${media.tabletLandscapeAndBelow`
      padding-top: 80px;
    `}
  }

  .page-text .image-block {
    padding: 8rem 6rem;
    ${media.smallDesktopAndBelow`
    	padding: 80px 60px;
    `}
    ${media.tabletPortraitAndBelow`
      padding-left: 20px;
      padding-right: 20px;
    `}
  }

  & > .image-block {
    padding: 8rem 6rem;
    ${media.smallDesktopAndBelow`
			padding: 80px 60px;
		`}
    ${media.tabletPortraitAndBelow`
      padding-left: 20px;
      padding-right: 20px;
    `}
  }

  .image-block .image-wrapper {
    background: ${(props) => props.theme.blue};
  }

  .image-block img {
    opacity: 0.8;
    transition: opacity 0.6s ease-in-out;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }

  .linkedPage {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .linkedPage .linktitle {
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

  .linked-page {
    color: ${(props) => props.theme.blue};
    font-size: ${font.p};
    display: flex;
    margin-top: 2.5rem;
    width: auto;
    ${media.smallDesktopAndBelow`
      margin-top: 25px;
      font-size: ${font.pMobile};
    `}
  }

  .linked-page svg {
    position: relative;
    height: 14px;
    width: 25px;
    margin-top: 0.5rem;
    display: inline-block;
    ${media.smallDesktopAndBelow`
      margin-top: 5px;
    `}
    ${media.tabletPortraitAndBelow`
      margin-top: 3px;
    `}
  }

  & > .linebreaker:nth-of-type(1) {
    margin-top: 1.2rem;
    ${media.smallDesktopAndBelow`
    margin-top: 12px;
      `}
  }
`;

export default PageStyles;
