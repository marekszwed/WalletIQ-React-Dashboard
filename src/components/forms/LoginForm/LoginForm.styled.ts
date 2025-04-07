import styled from "styled-components";
import CustomError from "../../common/CustomError";
import HeaderButton from "../../common/HeaderButton";
import {
	FormLayout,
	InputContainerLayout,
	InputLayout,
	LabelLayout,
} from "../../../styles/mixin";

export const Form = styled.form`
	${FormLayout}
`;

export const InputContainer = styled.div`
	${InputContainerLayout}
	margin-bottom: ${({ theme }) => theme.margin.m4};
`;

export const Label = styled.label`
	${LabelLayout}
`;

export const Input = styled.input`
	${InputLayout}
`;

export const InputError = styled(CustomError)`
	padding-left: ${({ theme }) => theme.padding.p1};
`;

export const SubmitButton = styled(HeaderButton)`
	width: 100%;
`;
