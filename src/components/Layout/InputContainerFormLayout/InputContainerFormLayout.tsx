import { ReactNode } from "react";
import * as S from "./InputContainerFormLayout.styled";

interface InputContainerProps {
	className?: string;
	children: ReactNode;
}

function InputContainerFormLayout({
	className,
	children,
}: InputContainerProps) {
	const containerProps = { className, children };

	return <S.Container {...containerProps} />;
}

export default InputContainerFormLayout;
