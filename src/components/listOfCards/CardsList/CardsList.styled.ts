import styled from "styled-components";
import Button from "../../common/Button";

export const CardsListContainer = styled.div`
	position: relative;
	display: flex;
	width: 50%;
	flex-direction: column;
	padding-inline: ${({ theme }) => theme.padding.p7};
	background-color: ${({ theme }) => theme.primaryColors.white};
	border-radius: ${({ theme }) => theme.border.b1};
`;

export const SubMenu = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const AddCardButton = styled(Button)`
	margin-right: ${({ theme }) => theme.margin.m5};
`;

export const SubMenuButton = styled(Button)`
	margin-right: 0;
`;

export const SubpageTitle = styled.h2`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.f4_2};
`;

export const ManageButtonsBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Ul = styled.ul`
	position: relative;
	list-style: none;
	width: 100%;
	padding: 0;
`;
