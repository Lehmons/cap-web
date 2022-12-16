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

  ol li,
  ul li:before {
    background: ${(props) => props.theme.blue};
    border: 1px solid white;
  }

`;

export default TextBlockStyles;
