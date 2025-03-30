import { NavLink } from "react-router-dom";
import * as S from "./HeaderButton.styled";

// interface Props {
// 	type?: "submit" | "button";
// 	text?: string;
// 	href?: string;
// 	className?: string;
// 	onClick?: () => void;
// }

// function HeaderButton({ type, href, text, className, onClick }: Props) {
// 	const buttonProps = { className, onClick };
// 	// const button = <S.ButtonStyled type={type} {...buttonProps}>{text}</S.ButtonStyled>;

// 	if (href) {
// 		return (
// 			<NavLink to={href}>
// 				<S.ButtonStyled {...buttonProps}>{text}</S.ButtonStyled>
// 			</NavLink>
// 		);
// 	} else {
// 		return (
// 			<S.ButtonStyled type={type} {...buttonProps}>
// 				{text}
// 			</S.ButtonStyled>
// 		);
// 	}

// 	// return button;
// }

interface Props {
	type?: "submit" | "button";
	text?: string;
	href?: string;
	className?: string;
	onClick?: () => void;
}

function HeaderButton({ type, href, text, className, onClick }: Props) {
	const buttonProps = { className, onClick };
	const button = <S.ButtonStyled {...buttonProps}>{text}</S.ButtonStyled>;

	if (href) {
		return (
			<NavLink type={type} to={href}>
				{button}
			</NavLink>
		);
	}

	return button;
}

export default HeaderButton;
