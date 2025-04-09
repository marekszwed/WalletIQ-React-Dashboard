import styled from "styled-components";
import HeaderButton from "../../common/HeaderButton";
import CustomError from "../../common/CustomError";
import FormLayout from "../../Layout/FormLayout";

export const Form = styled(FormLayout)`
	max-width: 40rem;
`;

export const InputError = styled(CustomError)`
	padding-left: ${({ theme }) => theme.padding.p1};
`;

export const SubmitButton = styled(HeaderButton)`
	width: 100%;
`;
