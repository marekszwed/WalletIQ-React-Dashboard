import { useLocation } from "react-router";
import * as S from "./Logo.styled";
import walletIQLogo from "/WalletIQLogo.svg";
import { Routes } from "../../constants/constants";

function Logo() {
	const location = useLocation();
	const ALLOWED_PATH = location.pathname === Routes.dashboard;
	if (ALLOWED_PATH) {
		return (
			<S.Navlink to={Routes.dashboard}>
				<S.Logo src={walletIQLogo} />
			</S.Navlink>
		);
	} else {
		return <S.Logo src={walletIQLogo} />;
	}
}

export default Logo;
