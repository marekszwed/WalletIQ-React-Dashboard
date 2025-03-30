import { useState } from "react";
import * as S from "./Dashboard.styled";
import SideBar from "../../components/SideBar/SideBar";
import { Sling as Hamburger } from "hamburger-react";

function Dashboard() {
	const [isOpen, setiIsOpen] = useState(false);

	return (
		<S.Dashboard>
			<SideBar toggleMenu={isOpen} showTitle={isOpen}>
				<Hamburger toggled={isOpen} toggle={setiIsOpen} size={20} />
			</SideBar>
		</S.Dashboard>
	);
}

export default Dashboard;
