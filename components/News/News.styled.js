// ****************************************/
// News
// ****************************************/

import styled from "styled-components";
import { font, media } from "../Styles";
import { motion } from "framer-motion";

const NewsStyled = styled(motion.section)`
  width: 50%;
  padding-top: calc(46.5vh - 29rem);
  ${media.tabletPortraitAndBelow`
    width:100%;
    padding-top: 338px;
  `}// single news post
`;

export default NewsStyled;
