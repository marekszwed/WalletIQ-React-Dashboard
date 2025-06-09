import styled from "styled-components";
import FormLayout from "../../Layout/FormLayout";
import LabelFormLayout from "../../Layout/LabelFormLayout";
import InputFormLayout from "../../Layout/InputFormLayout";
import { Button, CustomError } from "../..";

export const Form = styled(FormLayout)`
	max-width: 50rem;
	background-color: ${({ theme }) => theme.primaryColors.white};
	border-radius: ${({ theme }) => theme.border.b1};
	margin: 0;
	overflow: hidden;
	padding: ${({ theme }) => `${theme.padding.p2} ${theme.padding.p3}`};
`;

export const Heading = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: ${({ theme }) => `${theme.margin.m2} 0`};
`;

export const Legend = styled.legend`
	font-size: ${({ theme }) => theme.fontSize.f2};
	font-weight: ${({ theme }) => theme.fontWeight.f700};
	padding-left: 0;
	margin-bottom: 0;
`;

export const Description = styled.p`
	font-size: ${({ theme }) => theme.fontSize.f1_4};
	margin-top: ${({ theme }) => theme.margin.m1};
`;

export const Label = styled(LabelFormLayout)`
	padding-left: 0;
`;

export const Input = styled(InputFormLayout)`
	border: ${({ theme }) =>
		`${theme.border.b_1} solid ${theme.primaryColors.white300}`};
`;

export const InputError = styled(CustomError)`
	padding: ${({ theme }) => `${theme.padding.p_3} 0 ${theme.padding.p1} 0`};
`;

export const TransactionTypeBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const Title = styled.p`
	padding: 0;
	margin-bottom: ${({ theme }) => theme.margin.m1};
	font-size: ${({ theme }) => theme.fontSize.f_normal};
`;

export const Options = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;

export const LabelForTransactionType = styled.label`
	font-size: ${({ theme }) => theme.fontSize.f_normal};
`;

export const IncomeInput = styled.input`
	font-size: ${({ theme }) => theme.fontSize.f_normal};
`;

export const OutcomeInput = styled(IncomeInput)`
	margin-left: ${({ theme }) => theme.margin.m3};
`;

export const TextArea = styled.textarea`
	display: flex;
	max-height: 5rem;
	border-radius: ${({ theme }) => theme.border.b1};
	border: ${({ theme }) =>
		`${theme.border.b_1} solid ${theme.primaryColors.white300}`};
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	resize: vertical;
`;

export const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin: ${({ theme }) => `0 0 ${theme.margin.m3} ${theme.margin.m3}`};
`;

export const CancelButton = styled(Button)`
	margin-right: ${({ theme }) => theme.margin.m2};
	background-color: ${({ theme }) => theme.primaryColors.white};
	color: ${({ theme }) => theme.primaryColors.black};
	border: ${({ theme }) =>
		`${theme.border.b_1} solid ${theme.primaryColors.white300}`};

	&:hover {
		color: ${({ theme }) => theme.primaryColors.error};
		background-color: #fff;
		border: ${({ theme }) =>
			`${theme.border.b_1} solid ${theme.primaryColors.error}`};
	}
`;
