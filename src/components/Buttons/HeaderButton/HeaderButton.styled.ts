import { NavLink } from "react-router";
import styled from "styled-components";

export const ButtonStyled = styled.button`
	display: flex;
	justify-content: center;
	margin-right: 2rem;
	padding: 1rem 2.4rem;
	font-size: ${({ theme }) => theme.fontSize.normal};
	background-color: ${({ theme }) => theme.primaryColors.blue};
	color: #fff;
	border-radius: 1rem;
	border: 1px solid transparent;
	transition: background-color 0.3s;
	overflow: hidden;

	&:hover {
		background-color: ${({ theme }) => theme.primaryColors.hover.darkBlue};
	}
`;

export const Navlink = styled(NavLink)`
	text-decoration: none;
`;
