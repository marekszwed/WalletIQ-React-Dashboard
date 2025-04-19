import styled from "styled-components";
import Button from "../Button";

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.9);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: ${({ theme }) => theme.zindex.overlay};
`;

export const ModalContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 50rem;
	width: 100%;
	background-color: ${({ theme }) => theme.primaryColors.black};
	border-radius: ${({ theme }) => theme.border.b1};
	border: ${({ theme }) => theme.border.b_1} solid
		${({ theme }) => theme.primaryColors.palette.blue800};
	overflow: hidden;
`;

export const AnnouncmentBox = styled.div`
	position: relative;
	flex-direction: column;
	justify-content: center;
	text-align: center;
`;

export const Title = styled.p`
	font-size: ${({ theme }) => theme.fontSize.f_h2};
	color: ${({ theme }) => theme.primaryColors.white};
	margin-bottom: 0;
`;

export const Description = styled.p`
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	font-weight: ${({ theme }) => theme.fontWeight.f200};
	color: ${({ theme }) => theme.primaryColors.white};
`;

export const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	margin: ${({ theme }) => theme.margin.m3} 0;
`;

export const WarningButton = styled.button`
	display: flex;
	justify-content: center;
	max-width: 15rem;
	width: 100%;
	padding: ${({ theme }) => `${theme.padding.p1} ${theme.padding.p2_4}`};
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	background-color: ${({ theme }) => theme.primaryColors.error};
	color: ${({ theme }) => theme.primaryColors.white};
	border-radius: 1rem;
	border: ${({ theme }) => theme.border.b_1} solid
		${({ theme }) => theme.primaryColors.transparent};
	transition: background-color 0.2s;
	overflow: hidden;
`;

export const CancelButton = styled(Button)`
	margin-right: 0;
	max-width: 15rem;
	width: 100%;
`;
