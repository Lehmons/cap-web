// ****************************************/
// TextBlock
// ****************************************/

import styled from "styled-components";
import { font, media } from "../../Styles";

const TextBlockStyles = styled.section`
  width: 100%;
  padding: 2.5rem 0 6rem 0;
  ${media.smallDesktopAndBelow`
    padding: 25px 0 60px 0;
  `}

  .text > div {
    color: ${(props) => props.theme.blue};
    padding-left: 6rem;
    padding-right: 6rem;
    ${media.smallDesktopAndBelow`
    padding-left: 60px;
    padding-right: 60px;
      `}
  }

  .text p {
    font-size: ${font.p};
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
    `}
  }

  .linked-page {
    color: ${(props) => props.theme.blue};
    font-size: ${font.smallP};
    display: inline-block;
    margin-top: 2.5rem;
    width: auto;
    ${media.smallDesktopAndBelow`
      font-size: ${font.smallPMobile};
      margin-top: 25px;
    `}
  }

  .linked-page svg {
    margin-top: 0.6rem;
    ${media.smallDesktopAndBelow`
      margin-top: 6px;
    `}
  }

  .linked-page svg path {
    stroke: ${(props) => props.theme.blue};
  }

  .linked-page span {
    display: inline-block;
    padding-left: 6rem;
    padding-right: 0.5rem;
    ${media.smallDesktopAndBelow`
    padding-left: 60px;
    padding-right: 5px;
      `}
  }

  & > .linebreaker:nth-of-type(1) {
    margin-top: 6.6rem;
    ${media.smallDesktopAndBelow`
    margin-top: 66px;
      `}
  }

  .linebreaker {
    padding-top: 0.5rem;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`;

export default TextBlockStyles;
