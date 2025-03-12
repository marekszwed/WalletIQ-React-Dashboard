import styled from "styled-components";
import HeaderButton from "../Buttons/HeaderButton";

export const HeaderStyled = styled.header`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	background-color: ${({ theme }) => theme.primaryColors.background};
`;

export const ButtonsContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

export const StyledHeaderButton = styled(HeaderButton)`
	background-color: transparent;
	color: ${({ theme }) => theme.primaryColors.black};

	&:hover {
		color: ${({ theme }) => theme.primaryColors.hover.grey};
		background-color: transparent;
	}
`;
