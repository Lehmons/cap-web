// ****************************************/
// Nav Shimmer
// ****************************************/

import styled from "styled-components";
import { media, underline } from "../Styles";

const NavShimmerStyles = styled.section`
  position: relative;
  .image-wrapper {
    position: relative;
    height: 0;
    ${media.smallDesktopAndBelow`
    width: 100%;
	`}
    ${media.tabletPortraitAndBelow`
    width: 100%;
  `}
  }

  &.no-padding-bottom .image-wrapper {
    height: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.6s ease-in-out;
  }

  &.lazy-pending img {
    opacity: 0;
  }

  &.lazy-visible img {
    opacity: 1;
  }
`;

export default NavShimmerStyles;
