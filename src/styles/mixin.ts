import { css } from "styled-components";

export const PageStyled = css`
	position: relative;
	display: flex;
	width: 100%;
`;

export const Overlay = css`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.9);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: ${({ theme }) => theme.zindex.overlay};
`;
