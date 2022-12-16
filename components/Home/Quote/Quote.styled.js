// ****************************************/
// Quote
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../../Styles";

const QuoteStyles = styled.section`
  margin-top: 8rem;
  padding: 8rem 6rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background: ${props=> props.theme.blue100};
  row-gap: 4rem;
  ${media.smallDesktopAndBelow`
    padding: 80px 60px;
    row-gap: 40px;
    margin-top: 80px;
  `}
  ${media.tabletLandscapeAndBelow`
    margin-top: 60px;
  `}
  ${media.tabletPortraitAndBelow`
    padding-left: 20px;
    padding-right: 20px;
  `}

  q,
  q p {
    font-size: ${font.h2};
    ${media.tabletLandscapeAndBelow`
      font-size: ${font.h2Tablet};
    `}
    ${media.tabletPortraitAndBelow`
      font-size: ${font.h2Mobile};
    `}
  }

  q, span {
    color: ${props => props.theme.blue};
  }

  span {
    display: block;
    font-size: ${font.smallP}; 
    margin-top: 2rem;
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.smallPMobile};
      margin-top: 20px;
    `}
    }
`;

export default QuoteStyles;
