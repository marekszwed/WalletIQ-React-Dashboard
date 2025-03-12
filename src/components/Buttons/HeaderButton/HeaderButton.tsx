import * as S from "./HeaderButton.styled";

interface Props {
	text?: string;
	href?: string;
	className?: string;
}

function Button({ href, text, className }: Props) {
	const buttonProps = { className };
	if (href) {
		return (
			<S.Navlink to={href}>
				<S.ButtonStyled {...buttonProps}>{text}</S.ButtonStyled>
			</S.Navlink>
		);
	} else {
		return <S.ButtonStyled {...buttonProps}>{text}</S.ButtonStyled>;
	}
}

export default Button;
