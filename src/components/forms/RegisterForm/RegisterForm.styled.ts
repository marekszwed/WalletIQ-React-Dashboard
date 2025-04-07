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

export const PeronalInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	gap: 1rem;
`;

export const InputContainer = styled.div`
	${InputContainerLayout}
	margin-bottom: ${({ theme }) => theme.margin.m3};
`;

export const RowContainer = styled(InputContainer)`
	position: relative;
	display: flex;
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
