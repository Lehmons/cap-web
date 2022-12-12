// ****************************************/
// ImageTextBlock
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const ImageTextBlockStyles = styled.section`
  position: relative;
  width: 100%;
  min-height: 80rem;
  ${media.smallDesktopAndBelow`
    min-height: 800px;
  `}

  p {
    margin-top: 1.2rem;
    font-family: ${font.family200};
    @supports (font-variation-settings: normal) {
      font-family: ${font.family200VF};
    }
    font-size: ${font.smallP};
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
      margin-top: 12px;
      font-size: ${font.smallPMobile};
    `}
  }

  .text {
    color: ${(props) => props.theme.blue};
    padding: 2.5rem 6rem 6rem 6rem;
    ${media.smallDesktopAndBelow`
    padding-top: 25px;
    padding-left: 60px;
    padding-right: 60px;
    padding-bottom: 60px;
  `}
    ${media.tabletLandscapeAndBelow`
    padding-left: ${(props) => props.theme.sitePaddingLeftRightMobile};
    padding-right: ${(props) => props.theme.sitePaddingLeftRightMobile};
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

  .linebreaker {
    padding-top: 0.5rem;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`;

export default ImageTextBlockStyles;
