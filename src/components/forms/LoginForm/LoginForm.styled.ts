import styled from "styled-components";
import CustomError from "../../common/CustomError";
import Button from "../../common/Button";
import InputContainerFormLayout from "../../Layout/InputContainerFormLayout";

export const InputContainer = styled(InputContainerFormLayout)`
	margin-bottom: ${({ theme }) => theme.margin.m4};
`;

export const InputError = styled(CustomError)`
	padding-left: ${({ theme }) => theme.padding.p1};
`;

export const SubmitButton = styled(Button)`
	width: 100%;
`;
