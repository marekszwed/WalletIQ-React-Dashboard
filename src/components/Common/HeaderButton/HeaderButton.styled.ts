import styled from "styled-components";

export const ButtonStyled = styled.button`
	display: flex;
	justify-content: center;
	margin-right: ${({ theme }) => theme.margin.m2};
	padding: ${({ theme }) => `${theme.padding.p1} ${theme.padding.p2_4}`};
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	background-color: ${({ theme }) => theme.primaryColors.blue200};
	color: ${({ theme }) => theme.primaryColors.white};
	border-radius: 1rem;
	border: ${({ theme }) => theme.border.b_1} solid
		${({ theme }) => theme.primaryColors.transparent};
	transition: background-color 0.2s;
	overflow: hidden;

	&:hover {
		background-color: ${({ theme }) => theme.primaryColors.hover.blue100};
	}
`;
