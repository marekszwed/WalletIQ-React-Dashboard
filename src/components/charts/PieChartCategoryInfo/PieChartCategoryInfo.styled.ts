import styled from "styled-components";

export const Container = styled.div`
	grid-area: CategoryChart;
	margin: ${({ theme }) => `0 ${theme.margin.m2} 0 ${theme.margin.m1_5}`};
	background-color: ${({ theme }) => theme.primaryColors.white};
	border-radius: ${({ theme }) => theme.border.b1};
	height: 100%;
`;
