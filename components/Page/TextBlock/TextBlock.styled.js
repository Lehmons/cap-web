// ****************************************/
// TextBlock
// ****************************************/

import styled from "styled-components";
import { font, media } from "../../Styles";

const TextBlockStyles = styled.section`
  width: 100%;
  padding: 2.5rem 0 0rem 0;
  ${media.smallDesktopAndBelow`
    padding: 25px 0 0px 0;
  `}

	.text > p,
  .text > div {
    color: ${(props) => props.theme.blue};
    padding-left: 6rem;
    padding-right: 6rem;
    ${media.smallDesktopAndBelow`
      padding-left: 60px;
      padding-right: 60px;
      `}
  }

  .text h1 {
    padding-bottom: 3rem;
    ${media.smallDesktopAndBelow`
    padding-bottom: 30px;
    `}
  }

  .text p {
    font-size: ${font.p};
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
    `}
  }

  ul {
    font-size: ${font.p};
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
    background: ${(props) => props.theme.blue};
    transform: rotate(-45deg);
    ${media.tabletPortraitAndBelow`
      background: white;
			border: 1px solid ${(props) => props.theme.blue};
    `}
  }

  .linked-page {
    color: ${(props) => props.theme.blue};
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
