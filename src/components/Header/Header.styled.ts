import styled from "styled-components";

export const HeaderStyled = styled.header<{ $show: boolean; $isDarker: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	background-color: ${({ $isDarker, theme }) =>
		$isDarker ? theme.primaryColors.white100 : theme.primaryColors.white};
	border-bottom: ${({ $show, theme }) => ($show ? `${theme.border.b_1} solid
		${theme.primaryColors.white300}` : "none")};
	z-index: ${({ theme }) => theme.zindex.header};
`;

export const ButtonsContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

