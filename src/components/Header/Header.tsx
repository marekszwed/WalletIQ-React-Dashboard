import * as S from "./Header.styled";
import { useLocation } from "react-router-dom";
import { Routes } from "../../constants/constants";
import Button from "../common/HeaderButton";
import Logo from "../Logo";

function Header() {
	const location = useLocation();
	const isLoginPage = location.pathname === Routes.login;
	const isDashboard = location.pathname === Routes.dashboard;

	return (
		<S.HeaderStyled $show={isDashboard}>
			<Logo />
			{!isLoginPage && (
				<S.ButtonsContainer>
					<Button
						href={isDashboard ? "/" : "/login"}
						text={!isDashboard ? "Zaloguj się" : "Wyloguj się"}
					/>
				</S.ButtonsContainer>
			)}
		</S.HeaderStyled>
	);
}

export default Header;
