import { NavLink } from "react-router";
import styled from "styled-components";

export const Menu = styled.aside<{ $open: boolean }>`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex-grow: ${({ $open }) => ($open ? ".06" : "0")};
	border-right: ${({ theme }) => theme.border.b_1} solid
		${({ theme }) => theme.primaryColors.white300};
	height: 100vh;
	width: 3.7vw;
	text-align: left;
	top: 0;
	left: 0;
	transition: 0.2s ease-in-out;
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
