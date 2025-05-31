import styled from "styled-components";
import { Overlay } from "../../../styles/mixin";

export const SelectCardModalOverlay = styled.div`
	${Overlay}
`;

export const ModalContainer = styled.div`
	position: relative;
	width: auto;
	max-width: 75vw;
	background-color: ${({ theme }) => theme.primaryColors.black};
	border-radius: ${({ theme }) => theme.border.b1};
	border: ${({ theme }) => theme.border.b_1} solid
		${({ theme }) => theme.primaryColors.palette.blue800};
	overflow: hidden;
	padding: 2rem;
`;

export const Title = styled.p`
	text-align: center;
	margin: 0;
	padding-top: ${({ theme }) => theme.padding.p1};
	font-size: ${({ theme }) => theme.fontSize.f_h2};
	color: ${({ theme }) => theme.primaryColors.white};
`;
