// ****************************************/
// Footer
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const FooterStyles = styled.section`
	padding: 4rem 6rem 6rem 6rem;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	row-gap: 4rem;
	${media.smallDesktopAndBelow`
		padding: 40px 60px 60px 60px;
		row-gap: 40px;
	`}
	span {
		display: block;
	}

	a {
		display: inline-block;
		width: auto;
	}

	span, a {
		font-size: ${font.smallP};
		color: ${props => props.theme.blue};
		${media.smallDesktopAndBelow`
			font-size: ${font.smallPMobile};
		`}
	}

	& > section > span {
		padding-bottom: 1.2rem;
		${media.smallDesktopAndBelow`
			padding-bottom: 12px;
		`}
	}

	& > section a + a {
		margin-left: 1.2rem;
		${media.smallDesktopAndBelow`
			margin-left: 12px;
		`}
	}

	.menu-items a {
		text-transform: uppercase;
		margin-top: 3rem;
		${media.smallDesktopAndBelow`
			margin-top: 30px;
		`}
	}

	.menu-items a + a {
		margin-left: 1.2rem;
		${media.smallDesktopAndBelow`
			margin-left: 12px;
		`}
	}
	
	.legal span {
		display: inline-block;
	}

	.legal span + span {
		margin-left: 1.8rem;
		${media.smallDesktopAndBelow`
			margin-left: 18px;
		`}
	}
`;

export default FooterStyles;
