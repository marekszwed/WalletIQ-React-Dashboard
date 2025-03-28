import styled from "styled-components";

export const HeaderStyled = styled.header`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	background-color: ${({ theme }) => theme.primaryColors.white100};
`;

export const ButtonsContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;
