import styled from "styled-components";
import { PageStyled } from "../../styles/mixin";

export const Dashboard = styled.div`
	${PageStyled}
	background-color: ${({ theme }) => theme.primaryColors.white100};
	height: 100vh;
`;
