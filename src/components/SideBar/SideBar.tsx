import { ReactNode, useState } from "react";
import * as S from "./SideBar.styled";
import {
	BadgeDollarSign,
	ChartNoAxesCombined,
	CreditCard,
	House,
	Settings,
	UserRoundPen,
	Wallet,
} from "lucide-react";
import { Sling as Hamburger } from "hamburger-react";

interface NavigationItem {
	icon: ReactNode;
	title: string;
	path: string;
}

const navigationItems: NavigationItem[] = [
	{ icon: <House />, title: "Home", path: "/dashboard" },
	{ icon: <BadgeDollarSign />, title: "Transactions", path: "/transactions" },
	{ icon: <CreditCard />, title: "Cards", path: "/cards" },
	{ icon: <Wallet />, title: "Budget", path: "" },
	{ icon: <ChartNoAxesCombined />, title: "Charts", path: "" },
	{ icon: <UserRoundPen />, title: "Users", path: "" },
	{ icon: <Settings />, title: "Settings", path: "" },
];

function SideBar() {
	const [isOpen, setiIsOpen] = useState(false);

	return (
		<S.Menu $open={isOpen}>
			<S.BurgerWrapper>
				<Hamburger toggled={isOpen} toggle={setiIsOpen} size={20} />
			</S.BurgerWrapper>
			<S.Ul>
				{navigationItems.map((item, index) => (
					<S.Li key={index}>
						<S.StyledNavlink to={item.path}>
							{item.icon}
							<S.MenuItem $open={isOpen}>{item.title}</S.MenuItem>
						</S.StyledNavlink>
					</S.Li>
				))}
			</S.Ul>
		</S.Menu>
	);
}

export default SideBar;
