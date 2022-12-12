// ****************************************/
// BlueTextBlock
// ****************************************/

import styled from "styled-components";
import { font, media } from "../../Styles";

const TextBlockStyles = styled.section`
  width: 100%;
  min-height: 80rem;
  padding: 2.5rem 0 6rem 0;
  background: ${(props) => props.theme.blue};
  ${media.smallDesktopAndBelow`
    padding: 25px 0 60px 0;
    min-height: 800px;
  `}

  .text > div {
    color: white;
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
    color: white;
    ${media.smallDesktopAndBelow`
    padding-bottom: 30px;
    `}
  }

  .text p {
    color: white;
    font-size: ${font.p};
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
    `}
  }

  .text a {
    color: white;
    background: ${(props) => props.theme.blue};
  }

  .linked-page {
    color: white;
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
    stroke: white;
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
`;

export default TextBlockStyles;
