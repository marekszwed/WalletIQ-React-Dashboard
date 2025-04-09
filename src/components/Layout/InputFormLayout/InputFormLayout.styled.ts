import styled from "styled-components";

export const Input = styled.input`
	padding: ${({ theme }) => `${theme.padding.p1} ${theme.padding.p1}`};
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	border-radius: ${({ theme }) => theme.border.b1};
	border: none;
`;
