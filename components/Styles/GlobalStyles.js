// ****************************************/
// Global Styles & Resets
// ****************************************/

import { createGlobalStyle } from "styled-components";
import media from "./Media";
import font from "./Font";

const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
	}


	html{
		box-sizing: border-box;
		-webkit-print-color-adjust: exact;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}

	*, *:before, *:after{
		box-sizing: inherit;
	}

	body,h1,h2,h3,h4,p{
		border: 0;
	}

  body {
    font-weight: 400;
		font-family: ${font.family100};
  }

	html, body{
		font-size:  ${(props) =>
      (props.theme.baseline * 100) / props.theme.viewport}vmax;
		/* font-size: 0.694vmax */
		/* 1440px times 0.694 = 10px base */
	}

	a {
		outline: 0;
		text-decoration: none;
	}

	ul{
		text-decoration: none;
		list-style-type: none;
		padding: 0;
    font-family: ${font.family100};
	}

	h1, h2, h3, h4, h5, h6, p, a, li, span, input, label, button, em, figcaption{
		text-rendering: optimizelegibility;
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: 100%;
		-ms-text-size-adjust: 100%;
		font-weight: normal;
		font-feature-settings: "kern" 1;
	}

  h1 {
    font-size: ${font.h1};
    line-height: ${font.titleLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.h1Tablet};
    `}
    ${media.tabletPortraitAndBelow`
      font-size: ${font.h1Mobile};
    `}
  }

  h2 {
    font-size: ${font.h2};
    line-height: ${font.titleLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.h2Tablet};
    `}
    ${media.tabletPortraitAndBelow`
      font-size: ${font.h2Mobile};
    `}
  }

  ol, p {
    font-size: ${font.p};
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
    `}
  }
	
	button:focus {
    outline: none;
  }

	button {
		border: 0;
    font-family: ${font.family100};
    background: transparent;
	}

	button:hover {
		cursor: pointer;
	}
	button[disabled]{
    opacity: 0.2;
    pointer-events: none;
  }

	#site{
		margin-left: auto;
		margin-right: auto;
	}

	fieldset {
		border: 0;
	}

	.cta {
		font-size: ${font.p};
		transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
		padding: 1rem 2.2rem 1.1rem 2.2rem;
    width: 100%;
    border: 1px solid ${(props) => props.theme.blue};
		color: ${(props) => props.theme.blue};
		${media.smallDesktopAndBelow`
			font-size: ${font.pMobile};
			padding: 10px 22px 11px 22px;
		`}
	}

  .cta:hover {
    color: white;
		background: ${props => props.theme.blue};
  }

  &:hover {
    cursor: pointer;
  }
`;

export default GlobalStyles;
