import { ReactNode } from "react";
import * as S from "./LabelFormLayout.styled";

type LabelFormLayoutProps = {
	children: ReactNode;
} & React.ComponentProps<"label">;

function LabelFormLayout({ children, ...props }: LabelFormLayoutProps) {
	return <S.Label {...props}>{children}</S.Label>;
}

export default LabelFormLayout;
