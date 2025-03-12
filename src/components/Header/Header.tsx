import Button from "../Buttons/HeaderButton";
import Logo from "../Logo";
import * as S from "./Header.styled";

function Header() {
	return (
		<S.HeaderStyled>
			<Logo />
			<S.ButtonsContainer>
				<Button text="Zaloguj się" />
				<S.StyledHeaderButton text="Zarejestruj się" />
			</S.ButtonsContainer>
		</S.HeaderStyled>
	);
}

export default Header;
