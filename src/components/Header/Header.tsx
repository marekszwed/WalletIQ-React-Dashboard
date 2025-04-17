import * as S from "./Header.styled";
import { useLocation } from "react-router-dom";
import { Routes } from "../../constants/constants";
import Logo from "../Logo";

function Header() {
	const location = useLocation();
	const Paths = [Routes.home, Routes.login];
	const isNotAllowedPath = Paths.includes(location.pathname);
	const isLoginPage = location.pathname === Routes.login;

	return (
		<S.HeaderStyled $show={!isNotAllowedPath} $isDarker={isNotAllowedPath}>
			<Logo />
			{!isLoginPage && (
				<S.ButtonsContainer>
					<S.HeaderButton
						href={!isNotAllowedPath ? "/" : "/login"}
						text={isNotAllowedPath ? "Zaloguj się" : "Wyloguj się"}
					/>
				</S.ButtonsContainer>
			)}
		</S.HeaderStyled>
	);
}

export default Header;
