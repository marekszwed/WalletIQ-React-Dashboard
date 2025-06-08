import { Trash2 } from "lucide-react";
import styled from "styled-components";

export const Li = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: ${({ theme }) => theme.margin.m2};
	padding: ${({ theme }) =>
		`${theme.padding.p_5} ${theme.padding.p_5} ${theme.padding.p_5} ${theme.padding.p2}`};
	font-size: ${({ theme }) => theme.fontSize.f2};
	background-color: ${({ theme }) => theme.primaryColors.white};
	border-radius: ${({ theme }) => theme.border.b1};
	box-shadow: 8px 8px 32px 1px rgba(219, 226, 239, 1);
	overflow: hidden;
`;

export const CardInfoContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const CardDataBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-right: ${({ theme }) => theme.margin.m9};
`;

export const CardData = styled.p`
	margin: 0;
	padding: ${({ theme }) => theme.padding.p_5};
	font-size: ${({ theme }) => theme.fontSize.f1_4};
`;

export const Options = styled.div`
	padding-right: ${({ theme }) => theme.padding.p2};
	display: flex;
	cursor: pointer;
`;

export const Icon = styled(Trash2)`
	color: ${({ theme }) => theme.primaryColors.error};
`;
