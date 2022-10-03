// ****************************************/
// MobileNav
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const MobileNavStyles = styled.section`
  ${media.smallDesktopAndBelow`
	`}
  ${media.mobileOnly`
	`}
`;

export default MobileNavStyles;
