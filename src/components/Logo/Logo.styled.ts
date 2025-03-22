import { NavLink } from "react-router";
import styled from "styled-components";

export const Logo = styled.img`
	display: flex;
	width: 5rem;
	height: 5rem;
	margin: ${({ theme }) => `${theme.margin.m1} ${theme.margin.m2}`};
`;

export const Navlink = styled(NavLink)`
	text-decoration: none;
`;
