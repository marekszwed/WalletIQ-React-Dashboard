import { NavLink } from "react-router";
import styled from "styled-components";

export const Logo = styled.h1`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.header};
	color: ${({ theme }) => theme.primaryColors.black};
	margin: 1rem 2rem;
`;

export const Navlink = styled(NavLink)`
	text-decoration: none;
`;
