import { ReactNode } from "react";
import * as S from "./LabelFormLayout.styled";

type LabelFormLayoutProps = {
	children: ReactNode;
	htmlFor: string;
	className?: string;
};

function LabelFormLayout(props: LabelFormLayoutProps) {
	return <S.Label {...props}></S.Label>;
}

export default LabelFormLayout;
