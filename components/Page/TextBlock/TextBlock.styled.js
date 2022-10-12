// ****************************************/
// TextBlock
// ****************************************/

import styled from "styled-components";
import { font, media } from "../../Styles";

const TextBlockStyles = styled.section`
  width: 100%;

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

export default TextBlockStyles;
