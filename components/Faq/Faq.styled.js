// ****************************************/
// FAQ
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const FaqStyles = styled(motion.section)`
  width: 50%;
	padding-top: calc(50vh - 8.5rem);
	${media.smallDesktopAndBelow`
		padding-top: calc(50vh - 85px);
	`}
  color: ${(props) => props.theme.blue};
  padding-left: 6rem;
  padding-right: 6rem;
  ${media.smallDesktopAndBelow`
    padding-left: 60px;
    padding-right: 60px;
      `}
  ${media.tabletPortraitAndBelow`
    width:100%;
    padding-top: 338px;
  `}

  .faq-title {
		padding-top: 8rem;
    color: ${(props) => props.theme.blue};
    font-size: ${font.h1};
		${media.smallDesktopAndBelow`
			padding-top: 80px;
		`}
  }

  .description {
    font-size: ${font.p};
    line-height: ${font.pLineHeight};
    padding: 6rem 0 6rem 0;
    text-transform: uppercase;
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
      padding: 60px 0 60px 0;
    `}
  }

  .accordion .title {
    text-transform: uppercase;
    font-size: ${font.p};
  }
  .accordion-container > :first-child {
    border-top: 1px solid ${(props) => props.theme.blue};
  }
`;

export default FaqStyles;
