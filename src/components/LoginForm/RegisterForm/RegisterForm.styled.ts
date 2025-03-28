import styled from "styled-components";
import HeaderButton from "../../Common/HeaderButton";
import CustomError from "../../Common/CustomError";

export const Form = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: ${({ theme }) => theme.margin.m3};
`;

export const PeronalInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	gap: 1rem;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: ${({ theme }) => theme.margin.m3};
`;

export const RowContainer = styled(InputContainer)`
	position: relative;
	display: flex;
`;

export const Label = styled.label`
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	padding-left: ${({ theme }) => theme.padding.p1};
	padding-bottom: ${({ theme }) => theme.padding.p1};
`;

export const Input = styled.input`
	padding: ${({ theme }) => `${theme.padding.p1} ${theme.padding.p1}`};
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	border-radius: ${({ theme }) => theme.border.b1};
	border: none;
`;

export const InputError = styled(CustomError)`
	padding-left: ${({ theme }) => theme.padding.p1};
`;

export const SubmitButton = styled(HeaderButton)`
	width: 100%;
`;
