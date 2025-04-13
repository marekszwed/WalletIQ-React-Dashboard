import styled from "styled-components";
import HeaderButton from "../../common/HeaderButton";

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

export const SubMenuButton = styled(HeaderButton)`
	margin-right: 0;
`;

export const SubpageTitle = styled.h1`
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
