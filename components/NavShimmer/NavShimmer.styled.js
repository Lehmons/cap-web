// ****************************************/
// Nav Shimmer
// ****************************************/

import styled from "styled-components";
import { media, underline } from "../Styles";

const NavShimmerStyles = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: opacity 0.8s ease-in-out;
  opacity: 0.2;

  &.is-not-scrolling {
    opacity: 0.1;
  }

  .image-block,
  .image-wrapper,
  .image-wrapper img {
    width: 100%;
    height: 100% !important;
  }

  .image-wrapper img {
    object-fit: cover;
  }
`;

export default NavShimmerStyles;
