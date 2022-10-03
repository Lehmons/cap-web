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
`;

export default GlobalStyles;
