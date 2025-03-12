import styled from "styled-components";
import { PageStyled } from "../../styles/mixin";

export const HomePageStyled = styled.div`
	${PageStyled}
	justify-content: center;
	align-items: center;
	height: 100vh;
  background-color: ${({theme}) => theme.primaryColors.background};
`;
