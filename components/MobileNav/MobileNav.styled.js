// ****************************************/
// MobileNav
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const MobileNavStyles = styled.section`
  ${media.smallDesktopAndBelow`
  .m-account-svg,
  .m-menu-svg {
    display: none;
    ${media.tabletPortraitAndBelow`
      display: block
    `}
  }
	`}
  ${media.mobileOnly`
	`}
`;

export default MobileNavStyles;
