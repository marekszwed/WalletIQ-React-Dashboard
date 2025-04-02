import { NavLink } from "react-router-dom";
import * as S from "./HeaderButton.styled";

interface Props {
	type?: "submit" | "button";
	text?: string;
	href?: string;
	className?: string;
	onClick?: () => void;
}

function HeaderButton({ type, href, text, className, onClick }: Props) {
	const buttonProps = { className, onClick };

	if (href) {
		return (
			<NavLink to={href}>
				<S.ButtonStyled {...buttonProps}>{text}</S.ButtonStyled>
			</NavLink>
		);
	} else {
		return (
			<S.ButtonStyled type={type} {...buttonProps}>
				{text}
			</S.ButtonStyled>
		);
	}
}

export default HeaderButton;
