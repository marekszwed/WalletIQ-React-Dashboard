import styled from "styled-components";
import CustomError from "../../common/CustomError";
import HeaderButton from "../../common/HeaderButton";
import InputContainerFormLayout from "../../Layout/InputContainerFormLayout";

export const PeronalInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	gap: 1rem;
`;

export const InputContainer = styled(InputContainerFormLayout)`
	margin-bottom: ${({ theme }) => theme.margin.m3};
`;

export const RowContainer = styled(InputContainer)`
	position: relative;
	display: flex;
`;

export const InputError = styled(CustomError)`
	padding-left: ${({ theme }) => theme.padding.p1};
`;

export const SubmitButton = styled(HeaderButton)`
	width: 100%;
`;
