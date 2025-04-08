import { JSX, ReactNode } from "react";
import * as S from "./FormLayout.styled";

interface FormLayoutProps extends React.FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode;
	className?: string;
}

function FormLayout({
	className,
	children,
	...props
}: FormLayoutProps): JSX.Element {
	return (
		<S.Form {...props} className={className}>
			{children}
		</S.Form>
	);
}

export default FormLayout;
