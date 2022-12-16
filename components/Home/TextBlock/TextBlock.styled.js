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
    ${media.tabletPortraitAndBelow`
      padding-left: 20px;
      padding-right: 20px;
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

  & > .linebreaker:nth-of-type(1) {
    margin-top: 6.6rem;
    ${media.smallDesktopAndBelow`
    margin-top: 66px;
      `}
  }
`;

export default TextBlockStyles;
