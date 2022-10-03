// ****************************************/
// MyModule
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const MenuMobileStyles = styled.section`
  ${media.tabletLandscapeAndBelow`
    top: ${(props) => props.theme.sitePaddingTopMobile};
  `}

  .menu-items {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0px;
  }

  .menu-items a {
    display: block;
    width: 100%;
    justify-content: space-between;
    padding: 0px;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 1px solid blue;
    font-size: 2.1rem;

    ${media.tabletPortraitAndBelow`
    padding: 38px 9px;
      margin: 0px;
      font-size: 21px;
    `}
  }

  .menu-items a:hover {
    color: white;
    background: ${(props) => props.theme.blue};
  }
`;

export default MenuMobileStyles;
