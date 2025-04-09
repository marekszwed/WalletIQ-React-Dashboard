import styled from "styled-components";

export const Form = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: ${({ theme }) => theme.margin.m3};
`;
