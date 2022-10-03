// ****************************************/
// PageText
// ****************************************/

import styled from "styled-components";
import { font, media } from "../../Styles";

const PageTextStyles = styled.section`
  .text {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    color: white;
    ${media.smallDesktopAndBelow`
      max-width: 800px;
    `}
  }
`;

export default PageTextStyles;
