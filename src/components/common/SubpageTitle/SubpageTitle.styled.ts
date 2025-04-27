import styled from "styled-components";

export const TitleContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 5rem;
	padding: ${({ theme }) => `${theme.padding.p1} 0 ${theme.padding.p1}
		${theme.padding.p2}`};
	background-color: ${({ theme }) => theme.primaryColors.white100};
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.primaryColors.black};
	font-size: ${({ theme }) => theme.fontSize.f_h1};
`;
