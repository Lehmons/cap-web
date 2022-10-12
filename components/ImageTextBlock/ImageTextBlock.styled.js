// ****************************************/
// ImageTextBlock
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const ImageTextBlockStyles = styled.section`
  position: relative;

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

  .linebreaker {
    padding-top: 0.5rem;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`;

export default ImageTextBlockStyles;
