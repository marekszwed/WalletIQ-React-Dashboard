import { ReactNode } from "react";
import * as S from "./SideBar.styled";
import {
	BadgeDollarSign,
	ChartNoAxesCombined,
	Settings,
	UserRoundPen,
	Wallet,
} from "lucide-react";

interface SideBarProps {
	children: ReactNode;
	toggleMenu: boolean;
	showTitle: boolean;
}

interface NavigationItem {
	icon: ReactNode;
	title: string;
	path: string;
}

const navigationItems: NavigationItem[] = [
	{ icon: <BadgeDollarSign />, title: "Transactions", path: "" },
	{ icon: <Wallet />, title: "Budget", path: "" },
	{ icon: <ChartNoAxesCombined />, title: "Charts", path: "" },
	{ icon: <UserRoundPen />, title: "Users", path: "" },
	{ icon: <Settings />, title: "Settings", path: "" },
];

function SideBar({ children, toggleMenu, showTitle }: SideBarProps) {
	return (
		<S.Menu $open={toggleMenu}>
			<S.BurgerWrapper>{children}</S.BurgerWrapper>
			<S.Ul>
				{navigationItems.map((item, index) => (
					<S.Li key={index}>
						<S.StyledNavlink to={item.path}>
							{item.icon}
							<S.MenuItem $open={showTitle}>{item.title}</S.MenuItem>
						</S.StyledNavlink>
					</S.Li>
				))}
			</S.Ul>
		</S.Menu>
	);
}

export default SideBar;
