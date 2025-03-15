import styled from "styled-components";

export const ButtonStyled = styled.button`
	display: flex;
	justify-content: center;
	margin-right: 2rem;
	padding: 1rem 2.4rem;
	font-size: ${({ theme }) => theme.fontSize.normal};
	background-color: ${({ theme }) => theme.primaryColors.blue};
	color: ${({ theme }) => theme.primaryColors.white};
	border-radius: 1rem;
	border: ${({ theme }) => theme.border.small} solid
		${({ theme }) => theme.primaryColors.transparent};
	transition: background-color 0.3s;
	overflow: hidden;

	&:hover {
		background-color: ${({ theme }) => theme.primaryColors.hover.blue100};
	}
`;
