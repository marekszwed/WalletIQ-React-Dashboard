import styled from "styled-components";
import { Button } from "../..";

export const TransactionContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 70%;
	padding-inline: ${({ theme }) => theme.padding.p7};
	background-color: ${({ theme }) => theme.primaryColors.white};
	border-radius: ${({ theme }) => theme.border.b1};
`;

export const SubMenu = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${({ theme }) => theme.margin.m2};
`;

export const DescriptionBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

export const Title = styled.h2`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.f_h2};
	margin-bottom: ${({ theme }) => theme.margin.m_5};
`;

export const Description = styled.p`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	margin-top: ${({ theme }) => theme.margin.m_5};
`;

export const AddTransactionButton = styled(Button)`
	background-color: ${({ theme }) => theme.primaryColors.green500};

	&:hover {
		background-color: ${({ theme }) => theme.primaryColors.hover.green600};
	}
`;

export const Ul = styled.ul`
	position: relative;
	list-style: none;
	width: 100%;
	padding: 0;
`;
