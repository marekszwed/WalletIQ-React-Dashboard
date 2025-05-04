import styled from "styled-components";

export const Widget = styled.div`
	position: relative;
	display: flex;
	max-width: 34.5rem;
	max-height: 16rem;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.primaryColors.white};
	border-radius: ${({ theme }) => theme.border.b1};
	overflow: hidden;
`;

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
`;

export const Icon = styled.div`
	margin: ${({ theme }) =>
		`${theme.margin.m2} 0 ${theme.margin.m2} ${theme.margin.m2}`};

	svg {
		width: 4rem;
		height: 4rem;
	}
`;

export const Text = styled.p`
	font-size: ${({ theme }) => theme.fontSize.f2};
	margin: ${({ theme }) => ` 0 0 ${theme.margin.m_5} ${theme.margin.m2}`};
`;

export const Summary = styled.p`
	font-size: ${({ theme }) => theme.fontSize.f3};
	margin: ${({ theme }) => ` 0 0 0 ${theme.margin.m2}`};
`;
