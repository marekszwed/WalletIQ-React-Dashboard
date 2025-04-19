import styled from "styled-components";
import { Overlay } from "../../../styles/mixin";
import { TriangleAlert } from "lucide-react";
import Button from "../../common/Button";

export const WarningOverlay = styled.div`
	${Overlay}
`;

export const Container = styled.div`
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

export const IconContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: ${({ theme }) => theme.margin.m4};
	width: 6rem;
	height: 6rem;
	background-color: ${({ theme }) => theme.primaryColors.error};
	border-radius: 5rem;
`;

export const Icon = styled(TriangleAlert)`
	display: flex;
	width: 4rem;
	height: 4rem;
	margin-bottom: ${({ theme }) => theme.margin.m_6};
	color: ${({ theme }) => theme.primaryColors.white};
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

export const Announcment = styled.p`
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
