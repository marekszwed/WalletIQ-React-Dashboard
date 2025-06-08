import styled from "styled-components";
import Button from "../../common/Button";
import CustomError from "../../common/CustomError";
import FormLayout from "../../Layout/FormLayout";
import LabelFormLayout from "../../Layout/LabelFormLayout";

export const Form = styled(FormLayout)`
	max-width: 40rem;
`;

export const Label = styled(LabelFormLayout)`
	color: ${({ theme }) => theme.primaryColors.white};
	font-weight: ${({ theme }) => theme.fontWeight.f200};
`;

export const InputError = styled(CustomError)`
	padding-left: ${({ theme }) => theme.padding.p1};
`;

export const SubmitButton = styled(Button)`
	margin-top: ${({ theme }) => theme.margin.m2};
	width: 100%;
`;
