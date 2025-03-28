import styled from "styled-components";
import { PageStyled } from "../../styles/mixin";

export const LoginPage = styled.div`
	${PageStyled}
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.primaryColors.white100};
	height: 100vh;
`;

export const Card = styled.div`
	display: flex;
	max-width: 46rem;
	width: 100%;
	border: ${({ theme }) => theme.border.b_1} solid
		${({ theme }) => theme.primaryColors.white300};
	border-radius: ${({ theme }) => theme.border.b1};
	overflow: hidden;
`;

export const CardContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: ${({ theme }) => `${theme.margin.m1} ${theme.margin.m2}`};
	width: 100%;
`;
