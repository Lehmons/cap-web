// ****************************************/
// MyModule
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const PageStyles = styled.section`
  ${media.smallDesktopAndBelow`
	`}
  ${media.mobileOnly`
	`}
`;

export default PageStyles;
