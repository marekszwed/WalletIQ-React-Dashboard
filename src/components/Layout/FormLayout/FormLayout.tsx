import { ReactNode } from "react";
import * as S from "./FormLayout.styled";

type FormLayoutProps = {
	children: ReactNode;
	className?: string;
} & React.ComponentProps<"form">;

function FormLayout({ className, children, ...props }: FormLayoutProps) {
	return (
		<S.Form {...props} className={className}>
			{children}
		</S.Form>
	);
}

export default FormLayout;
