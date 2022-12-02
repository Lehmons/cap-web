// ****************************************/
// News Overview
// ****************************************/

import styled from "styled-components";
import { font, media } from "../Styles";
import { motion } from "framer-motion";

const NewsOverviewStyled = styled(motion.section)`
  width: 50%;
  padding-top: calc(46.5vh - 29rem);
  ${media.tabletPortraitAndBelow`
    width:100%;
    padding-top: 338px;
  `}

  .news-post {
    border-bottom: 1px solid blue;
  }

  /* & > .linebreaker:nth-of-type(1) {
    margin-top: 6.6rem;
    ${media.smallDesktopAndBelow`
    margin-top: 66px;
      `}
  }

  .linebreaker {
    padding-top: 0.5rem;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid ${(props) => props.theme.blue};
  } */
`;

export default NewsOverviewStyled;
