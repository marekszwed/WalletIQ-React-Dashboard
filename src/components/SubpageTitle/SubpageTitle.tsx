import { useLocation } from "react-router-dom";
import * as S from "./SubpageTitle.styled";

const PathToTitleItems: Record<string, string> = {
	"/dashboard": "Home",
	"/cards": "Cards",
};

function SubpageTitle() {
	const location = useLocation();
	const title = PathToTitleItems[location.pathname] || null;

	return (
		<S.TitleContainer>
			<S.Title>{title}</S.Title>
		</S.TitleContainer>
	);
}

export default SubpageTitle;
