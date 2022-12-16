// ****************************************/
// ImageTextBlockBlue
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const ImageTextBlockStyles = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.blue};
  ${media.tabletPortraitAndBelow`
    min-height: 50vh;
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

  .text > div {
    color: white;
    padding-left: 6rem;
    padding-right: 6rem;
    ${media.smallDesktopAndBelow`
    padding-left: 60px;
    padding-right: 60px;
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
`;

export default ImageTextBlockStyles;
