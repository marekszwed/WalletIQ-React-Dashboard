import styled from "styled-components";

export const Box = styled.div`
	position: relative;
	grid-area: widget1;
	display: flex;
	gap: 2rem;
	margin: ${({ theme }) =>
		`0 ${theme.margin.m2} ${theme.margin.m2} ${theme.grid.g3_2}`};
`;
