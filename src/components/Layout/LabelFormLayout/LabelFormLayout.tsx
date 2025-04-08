import { ReactNode } from "react";
import * as S from "./LabelFormLayout.styled";

interface LabelFormLayoutProps {
	children: ReactNode;
	htmlFor: string;
}

function LabelFormLayout({ children, htmlFor }: LabelFormLayoutProps) {
	return <S.Label htmlFor={htmlFor}>{children}</S.Label>;
}

export default LabelFormLayout;
