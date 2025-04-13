import { useState } from "react";
import { AddCardForm, CardsList, RemoveWarningPortal } from "../../components";
import * as S from "./Cards.styled";

function Cards() {
	const [isAddCardOpen, setIsAddCardOpen] = useState(false);
	const [isWarningOpen, setIsWarningOpen] = useState(false);

	return (
		<S.Cards>
			<CardsList
				onAddCardClick={() => setIsAddCardOpen(true)}
				onShowWarning={() => setIsWarningOpen(true)}
			/>
			<AddCardForm
				isOpen={isAddCardOpen}
				onClose={() => setIsAddCardOpen(false)}
			/>
			<RemoveWarningPortal
				isOpen={isWarningOpen}
				onClose={() => setIsWarningOpen(false)}
			/>
		</S.Cards>
	);
}

export default Cards;
