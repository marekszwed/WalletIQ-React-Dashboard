import styled from "styled-components";

export const HeaderStyled = styled.header<{ $show: boolean }>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	background-color: ${({ theme }) => theme.primaryColors.white100};
	border-bottom: ${({ $show }) => ($show ? "1px solid black" : "none")};
`;

export const ButtonsContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;
