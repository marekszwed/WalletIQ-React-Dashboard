import * as S from "./Header.styled";
import { useLocation } from "react-router-dom";
import { Routes } from "../../constants/constants";
import Logo from "../Logo";
import HeaderButton from "../common/HeaderButton";

function Header() {
	const location = useLocation();
	const NOT_ALLOWED_PATHS = [Routes.home, Routes.login];
	const isNotAllowedPaths = NOT_ALLOWED_PATHS.includes(location.pathname);
	const isLoginPage = location.pathname === Routes.login;

	return (
		<S.HeaderStyled
			$show={!NOT_ALLOWED_PATHS.includes(location.pathname)}
			$change={isNotAllowedPaths}
		>
			<Logo />
			{!isLoginPage && (
				<S.ButtonsContainer>
					<HeaderButton
						href={!isNotAllowedPaths ? "/" : "/login"}
						text={isNotAllowedPaths ? "Zaloguj się" : "Wyloguj się"}
					/>
				</S.ButtonsContainer>
			)}
		</S.HeaderStyled>
	);
}

export default Header;
