import { ReactNode } from "react";
import * as S from "./LabelFormLayout.styled";

type LabelFormLayoutProps = {
	children: ReactNode;
	className?: string;
} & React.ComponentProps<"label">;

function LabelFormLayout({
	children,
	className,
	...props
}: LabelFormLayoutProps) {
	return (
		<S.Label {...props} className={className}>
			{children}
		</S.Label>
	);
}

export default LabelFormLayout;
