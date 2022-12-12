// ****************************************/
// NewsPost  // single news post
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const NewsPostStyles = styled(motion.section)`
  width: 100%;
  padding: 2.5rem 0 8rem 0;
  ${media.tabletPortraitAndBelow`
    width:100%;
    padding-top: 338px;
  `}
  ${media.smallDesktopAndBelow`
    padding: 25px 0 80px 0;
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
		text-transform: uppercase;
  }

	.news-text {
		padding-top: 3.5rem;
		${media.smallDesktopAndBelow`
			padding-top: 35px;
		`}
	}

	.news-text div {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		row-gap: 1.5rem;
		grid-auto-rows: max-content;
		${media.smallDesktopAndBelow`
			row-gap: 15px;
		`}
	}

  .image-block {
    padding: 8rem 6rem 0 6rem;
		${media.smallDesktopAndBelow`
			padding: 80px 60px 0 60px;
		`}
	}

	.image-block + .image-block {
		padding-top: 2rem;
		${media.smallDesktopAndBelow`
			padding-top: 20px;
		`}
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
