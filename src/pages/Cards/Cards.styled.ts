import styled from "styled-components";
import { PageStyled } from "../../styles/mixin";

export const Cards = styled.div`
	${PageStyled}
	background-color: ${({ theme }) => theme.primaryColors.white100};
	height: 100%;
	justify-content: center;
	align-items: flex-start;
	padding-top: 7rem;
`;
