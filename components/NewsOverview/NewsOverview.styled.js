// ****************************************/
// News Overview
// ****************************************/

import styled from "styled-components";
import { font, media } from "../Styles";
import { motion } from "framer-motion";

const NewsOverviewStyled = styled(motion.section)`
  width: 50%;
  padding-top: calc(50vh - 8.5rem);
  ${media.smallDesktopAndBelow`
		padding-top: calc(50vh - 85px);
	`}
  ${media.tabletPortraitAndBelow`
    width:100%;
    padding-top: 0px;
  `}

	.news-title {
    padding-top: 8rem;
    color: ${(props) => props.theme.blue};
    padding-left: 6rem;
    padding-right: 6rem;
    ${media.smallDesktopAndBelow`
			padding-top: 80px;
		`}
  }

  .news-title h1 {
    text-transform: uppercase;
  }

  .news-post {
    border-bottom: 1px solid blue;
  }
`;

export default NewsOverviewStyled;
