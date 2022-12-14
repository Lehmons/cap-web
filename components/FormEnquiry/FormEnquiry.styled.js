// ****************************************/
// FormEnquiry
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const FormEnquiryStyles = styled.section`
  .wrapper {
    padding: 12rem 6rem 8rem 6rem;
    ${media.smallDesktopAndBelow`
      padding: 120px 60px 80px 60px;
    `}
    ${media.tabletPortraitAndBelow`
      padding-top: 60px;
      padding-left: 20px;
      padding-right: 20px;
    `}
  }

	h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
  }

  fieldset {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 2.5rem;
    margin-top: 6rem;
    ${media.smallDesktopAndBelow`
			row-gap: 25px;
			margin-top: 60px;
		`}
  }

  button.primary {
    display: block;
    width: auto;
    justify-self: flex-end;
  }
`;

export default FormEnquiryStyles;
