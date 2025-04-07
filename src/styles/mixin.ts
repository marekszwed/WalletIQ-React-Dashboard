import { css } from "styled-components";

export const PageStyled = css`
	position: relative;
	display: flex;
	width: 100vw;
`;

export const FormLayout = css`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: ${({ theme }) => theme.margin.m3};
`;

export const InputContainerLayout = css`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const LabelLayout = css`
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	padding-left: ${({ theme }) => theme.padding.p1};
	padding-bottom: ${({ theme }) => theme.padding.p1};
`;

export const InputLayout = css`
	padding: ${({ theme }) => `${theme.padding.p1} ${theme.padding.p1}`};
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	border-radius: ${({ theme }) => theme.border.b1};
	border: none;
`;
