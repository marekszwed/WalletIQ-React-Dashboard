import * as S from "./Logo.styled";
import walletIQLogo from "/WalletIQLogo.svg";

function Logo() {
	return (
		<S.Navlink to="/">
			<S.Logo src={walletIQLogo} />
		</S.Navlink>
	);
}

export default Logo;
