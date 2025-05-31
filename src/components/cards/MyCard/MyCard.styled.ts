import styled from "styled-components";
import Button from "../../common/Button";

export const MyCardContainer = styled.aside`
	position: relative;
	grid-area: card;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 36rem;
	width: 100%;
	background-color: ${({ theme }) => theme.primaryColors.white};
	border-radius: ${({ theme }) => theme.border.b1};
	overflow: hidden;
`;

export const Title = styled.h3`
	display: flex;
	align-self: flex-start;
	margin: ${({ theme }) => `${theme.margin.m1} 0 ${theme.margin.m1}
		${theme.margin.m2}`};
	color: ${({ theme }) => theme.primaryColors.black};
	font-size: ${({ theme }) => theme.fontSize.f2};
`;

export const MyCardButton = styled(Button)`
	margin: ${({ theme }) => `${theme.margin.m2} 0 ${theme.margin.m2} 0`};
	width: 90%;
`;
