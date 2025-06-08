import styled from "styled-components";
import { Pointer } from "../../../styles/mixin";
import InputContainerFormLayout from "../../Layout/InputContainerFormLayout";
import LabelFormLayout from "../../Layout/LabelFormLayout";

export const SelectorBox = styled(InputContainerFormLayout)`
	position: relative;
	margin: ${({ theme }) => `0 0 ${theme.margin.m3} ${theme.margin.m3}`};
`;

export const Label = styled(LabelFormLayout)`
	padding-left: 0;
`;

export const Select = styled.select`
	box-sizing: border-box;
	max-width: 88%;
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	padding: ${({ theme }) => `${theme.padding.p1} ${theme.padding.p1}`};
	background-color: transparent;
	border-radius: 1rem;
	border: ${({ theme }) =>
		`${theme.border.b_1} solid ${theme.primaryColors.white300}`};
	${Pointer}
`;

export const Option = styled.option`
	width: 93%;
	font-size: ${({ theme }) => theme.fontSize.f_normal};
`;
