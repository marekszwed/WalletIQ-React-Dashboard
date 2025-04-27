import { useLocation } from "react-router-dom";
import * as S from "./SubpageTitle.styled";

enum Paths {
	Dashboard = "/dashboard",
	Cards = "/cards",
}

const PathToTitleItems: Record<Paths, string> = {
	[Paths.Dashboard]: "Home",
	[Paths.Cards]: "Cards",
};

function SubpageTitle() {
	const location = useLocation();
	const title = PathToTitleItems[location.pathname as Paths] || null;

	return (
		<S.TitleContainer>
			<S.Title>{title}</S.Title>
		</S.TitleContainer>
	);
}

export default SubpageTitle;
