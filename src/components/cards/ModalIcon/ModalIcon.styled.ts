import { TriangleAlert } from "lucide-react";
import styled from "styled-components";

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
