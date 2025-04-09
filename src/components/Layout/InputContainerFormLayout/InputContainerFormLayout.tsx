import { ReactNode } from "react";
import * as S from "./InputContainerFormLayout.styled";

type InputContainerProps = {
	className?: string;
	children: ReactNode;
};

function InputContainerFormLayout(props: InputContainerProps) {
	return <S.Container {...props} />;
}

export default InputContainerFormLayout;
