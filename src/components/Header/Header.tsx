import { useLocation } from "react-router";
import Button from "../ReusableComponents/HeaderButton";
import Logo from "../Logo";
import * as S from "./Header.styled";

function Header() {
	const location = useLocation();
	const isLoginPage = location.pathname === "/login";

	return (
		<S.HeaderStyled>
			<Logo />
			{!isLoginPage && (
				<S.ButtonsContainer>
					<Button href="/login" text="Zaloguj się" />
				</S.ButtonsContainer>
			)}
		</S.HeaderStyled>
	);
}

export default Header;
