import styled from "styled-components";
import CustomError from "../../common/CustomError";
import HeaderButton from "../../common/HeaderButton";
import InputContainerFormLayout from "../../Layout/InputContainerFormLayout";

export const InputContainer = styled(InputContainerFormLayout)`
	margin-bottom: ${({ theme }) => theme.margin.m4};
`;

export const InputError = styled(CustomError)`
	padding-left: ${({ theme }) => theme.padding.p1};
`;

export const SubmitButton = styled(HeaderButton)`
	width: 100%;
`;
