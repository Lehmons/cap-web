// ****************************************/
// Quote
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../../Styles";

const QuoteStyles = styled.section`
  padding: 8rem 6rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 4rem;
  ${media.smallDesktopAndBelow`
    padding: 80px 60px;
    row-gap: 40px;
  `}

  q, span {
    color: ${props => props.theme.blue};
  }

  span {
    display: block;
    font-size: ${font.p}; 
    margin-top: 2rem;
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
      margin-top: 20px;
    `}
    }
`;

export default QuoteStyles;
