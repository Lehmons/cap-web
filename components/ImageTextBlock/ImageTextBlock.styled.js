// ****************************************/
// ImageTextBlock
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const ImageTextBlockStyles = styled.section`
  position: relative;
  width: 100%;
  min-height: 80vh;
  padding-bottom: 6rem;
  ${media.smallDesktopAndBelow`
    
    padding-bottom: 60px;
  `}

  p {
    font-family: ${font.family200};
    @supports (font-variation-settings: normal) {
      font-family: ${font.family200VF};
    }
    font-size: ${font.smallP};
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.smallPMobile};
    `}
  }

  .text {
    color: ${(props) => props.theme.blue};
    padding: 2.5rem 6rem 0 6rem;
    ${media.smallDesktopAndBelow`
    padding-top: 25px;
    padding-left: 60px;
    padding-right: 60px;
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


  .image-block {
    padding: 8rem 6rem 2rem 6rem;
    ${media.smallDesktopAndBelow`
    padding: 8rem 6rem 20px 6rem;
    `}
    ${media.tabletPortraitAndBelow`
      padding-left: 20px;
      padding-right: 20px;
    `}
  }

  & > .linebreaker:nth-of-type(1) {
    margin-top: 6.6rem;
    ${media.smallDesktopAndBelow`
    margin-top: 66px;
      `}
  }
`;

export default ImageTextBlockStyles;
