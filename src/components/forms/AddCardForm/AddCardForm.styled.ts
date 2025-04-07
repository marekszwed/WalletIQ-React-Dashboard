import styled from "styled-components";
import {
	FormLayout,
	InputContainerLayout,
	InputLayout,
	LabelLayout,
} from "../../../styles/mixin";
import HeaderButton from "../../common/HeaderButton";
import CustomError from "../../common/CustomError";

export const Form = styled.form`
	${FormLayout}
	max-width: 40rem;
`;

export const InputContainer = styled.div`
	${InputContainerLayout}
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
