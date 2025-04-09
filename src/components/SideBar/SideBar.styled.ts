import { NavLink } from "react-router";
import styled from "styled-components";

export const Menu = styled.aside<{ $open: boolean }>`
	position: fixed;
	top: 7rem;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: ${({ theme }) => theme.primaryColors.white};
	border-right: ${({ theme }) => theme.border.b_1} solid
		${({ theme }) => theme.primaryColors.white300};
	height: 100%;
	width: ${({ $open }) => ($open ? "17rem" : "7rem")};
	text-align: left;
	transition: 0.2s ease-in-out;
	z-index: ${({ theme }) => theme.zindex.header};
	overflow: hidden;
`;

export const BurgerWrapper = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: ${({ theme }) => theme.margin.m1};
	padding-left: ${({ theme }) => theme.padding.p1};
`;

export const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: ${({ theme }) => theme.margin.m6};
	padding-left: ${({ theme }) => theme.padding.p2_3};
	list-style: none;
	width: 100%;
`;

export const Li = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		color: ${({ theme }) => theme.primaryColors.hover.blue};
	}
`;

export const StyledNavlink = styled(NavLink)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	color: inherit;
	width: 100%;
`;

export const MenuItem = styled.p<{ $open: boolean }>`
	visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
	padding-left: ${({ theme }) => theme.padding.p1};
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	opacity: ${({ $open }) => ($open ? 1 : 0)};
	transition: opacity 0.3s ease-in-out;
`;
