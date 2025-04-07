import { ReactNode } from "react";
import * as S from "./Layout.styled";
import SideBar from "../SideBar";
import Header from "../Header";
import { Routes } from "../../constants/constants";
import { useLocation } from "react-router";

interface LayoutProps {
	children: ReactNode;
}

function Layout({ children }: LayoutProps) {
	const location = useLocation();
	const Paths = [Routes.home, Routes.login];
	const NOT_ALLOWED = Paths.includes(location.pathname);

	return (
		<S.Wrapper>
			{!NOT_ALLOWED && <SideBar />}
			<S.Main $show={NOT_ALLOWED}>
				<Header />
				{children}
			</S.Main>
		</S.Wrapper>
	);
}

export default Layout;
