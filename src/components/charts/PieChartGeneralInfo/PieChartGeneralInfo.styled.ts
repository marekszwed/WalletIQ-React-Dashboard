import styled from "styled-components";

export const Container = styled.div`
	grid-area: GeneralChart;
	margin: ${({ theme }) => `0 ${theme.margin.m_5} 0 ${theme.margin.m3}`};
	background-color: ${({ theme }) => theme.primaryColors.white};
	border-radius: ${({ theme }) => theme.border.b1};
	height: 100%;
`;
