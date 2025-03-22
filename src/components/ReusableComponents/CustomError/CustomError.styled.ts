import styled from "styled-components";

export const CustomError = styled.p`
	display: flex;
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.fs1_4};
	color: ${({ theme }) => theme.primaryColors.error};
	margin: ${({ theme }) => theme.margin.m_5} 0
		${({ theme }) => theme.margin.m_5} 0;
`;
