import { ReactNode } from "react";
import * as S from "./AppLayout.styled";
import SideBar from "../../SideBar";
import Header from "../../Header";
import { Routes } from "../../../constants/constants";
import { useLocation } from "react-router";

interface LayoutProps {
	children: ReactNode;
}

function AppLayout({ children }: LayoutProps) {
	const location = useLocation();
	const Paths = [Routes.home, Routes.login];
	const isNotAllowed = Paths.includes(location.pathname);

	return (
		<S.Wrapper>
			{!isNotAllowed && <SideBar />}
			<S.Main $show={isNotAllowed}>
				<Header />
				{children}
			</S.Main>
		</S.Wrapper>
	);
}

export default AppLayout;
