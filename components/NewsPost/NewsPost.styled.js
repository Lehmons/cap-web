// ****************************************/
// NewsPost  // single news post
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const NewsPostStyles = styled(motion.section)`
  width: 100%;
  padding: 2.5rem 0 6rem 0;
  ${media.tabletPortraitAndBelow`
    width:100%;
    padding-top: 338px;
  `}
  ${media.smallDesktopAndBelow`
    padding: 25px 0 60px 0;
  `}

  .news-date p 
  .news-text, h2, h3, ol, ul, a, p, > div {
    color: ${(props) => props.theme.blue};
    padding-left: 6rem;
    padding-right: 6rem;
    font-size: ${font.p};
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
    padding-left: 60px;
    padding-right: 60px;
    font-size: ${font.pMobile};
      `}
  }

  .news-text h2 {
    padding-bottom: 3rem;
    ${media.smallDesktopAndBelow`
    padding-bottom: 30px;
    `}
  }

  .news-date p {
    padding-top: 5rem;
    padding-bottom: 7rem;
    ${media.smallDesktopAndBelow`
    padding-top: 50px;
    padding-bottom: 70px;
    `}
  }

  .image-block {
    padding: 2.5rem 2rem 6rem 2rem;
  }

  .image-block .image-wrapper {
    background: ${(props) => props.theme.blue};
  }

  .image-block img {
    opacity: 0.8;
    transition: opacity 0.6s ease-in-out;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
`;

export default NewsPostStyles;
