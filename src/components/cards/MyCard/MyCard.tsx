import { useSelector } from "react-redux";
import PaymentCard from "../PaymentCard";
import * as S from "./MyCard.styled";
import { RootState } from "../../../Store/store";
import { useDialogState } from "../../hooks/useDialogState";
import SelectCardModal from "../SelectCardModal";

function MyCard() {
	const selectedCard = useSelector(
		(state: RootState) => state.card.selectedCard
	);

	const addChooseCardModalState = useDialogState();

	return (
		<S.MyCardContainer>
			<S.Title>My Card</S.Title>
			{selectedCard ? (
				<PaymentCard
					cardName={selectedCard.cardName}
					cardNumber={selectedCard.creditCardNumber}
					expData={selectedCard.expirationDate}
				/>
			) : (
				<p>No card selected.</p>
			)}
			<S.MyCardButton
				text="Choose Your Card"
				onClick={addChooseCardModalState.toggleOpen}
			/>
			{addChooseCardModalState.isOpen && (
				<SelectCardModal
					onOpen={addChooseCardModalState.toggleOpen}
					onCancel={() => addChooseCardModalState.setIsOpen(true)}
					title="Choose Your Card"
				/>
			)}
		</S.MyCardContainer>
	);
}

export default MyCard;
