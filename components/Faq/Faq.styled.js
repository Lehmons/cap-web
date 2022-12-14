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
      padding-left: 20px;
      padding-right: 20px;
    `}
  ${media.tabletPortraitAndBelow`
    width:100%;
    padding-top: 0px;
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

  ul li {
    position: relative;
    padding-left: 2rem;
    ${media.smallDesktopAndBelow`
      padding-left: 20px;
    `}
  }

  & > ul {
    margin-top: 1.4rem;
    ${media.smallDesktopAndBelow`
    margin-top: 14px;
      `}
  }

  .faq-p div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 0.8rem;
    ${media.smallDesktopAndBelow`
      row-gap: 8px;
    `}
  }
`;

export default FaqStyles;
