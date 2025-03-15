import { NavLink } from "react-router";
import * as S from "./HeaderButton.styled";

interface Props {
	text?: string;
	href?: string;
	className?: string;
}

function Button({ href, text, className }: Props) {
	const buttonProps = { className };
	const button = <S.ButtonStyled {...buttonProps}>{text}</S.ButtonStyled>;

	if (href) {
		return <NavLink to={href}>{button}</NavLink>;
	}

	return button;
}

export default Button;
