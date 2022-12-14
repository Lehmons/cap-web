// ****************************************/
// SilverTextBlock
// ****************************************/

import styled from "styled-components";
import { font, media } from "../../Styles";

const TextBlockStyles = styled.section`
  width: 100%;
  min-height: 80rem;
  padding: 2.5rem 0 6rem 0;
  background: #e6e6eb;
  ${media.smallDesktopAndBelow`
    padding: 25px 0 60px 0;
    min-height:800px;
  `}

  .text > div {
    color: black;
    padding-left: 6rem;
    padding-right: 6rem;
    ${media.smallDesktopAndBelow`
    padding-left: 60px;
    padding-right: 60px;
      `}
    ${media.tabletPortraitAndBelow`
      padding-left: 20px;
      padding-right: 20px;
    `}
  }

  .text h1 {
    padding-bottom: 3rem;
    color: black;
    ${media.smallDesktopAndBelow`
    padding-bottom: 30px;
    `}
  }

  .text p {
    color: black;
    font-size: ${font.p};
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
    `}
  }

  .text a {
    color: black;
    background: ${(props) => props.theme.blue};
  }

  .linked-page {
    color: black;
    font-size: ${font.p};
    display: inline-block;
    margin-top: 2.5rem;
    width: auto;
    ${media.smallDesktopAndBelow`
      font-size: ${font.smallPMobile};
      margin-top: 25px;
    `}
  }

  .linked-page svg {
    height: 14px;
    width: 25px;
    margin-top: 0.6rem;
    ${media.smallDesktopAndBelow`
      margin-top: 6px;
    `}
  }

  .linked-page svg path {
    stroke: black;
  }

  .linked-page span {
    display: inline-block;
    padding-left: 6rem;
    padding-right: 0.5rem;
    ${media.smallDesktopAndBelow`
    padding-left: 60px;
    padding-right: 5px;
      `}
    ${media.tabletPortraitAndBelow`
      padding-left: 20px;
      padding-right: 20px;
    `}
  }

  ul {
    font-size: ${font.p};
    color: black;
    line-height: 2.9rem;
    text-transform: uppercase;
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
			line-height: 29px;
    `}
  }

  ul li {
    position: relative;
    padding-left: 2rem;
    color: black;
    ${media.smallDesktopAndBelow`
      padding-left: 20px;
    `}
  }

  ul li:before {
    display: block;
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    top: 10px;
    left: 2px;
    background: black;
    transform: rotate(-45deg);
    ${media.tabletPortraitAndBelow`
      background: white;
			border: black;
    `}
  }
`;

export default TextBlockStyles;
