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

	const choseCardModalState = useDialogState();

	return (
		<S.MyCardContainer>
			<S.Title>My Card</S.Title>
			{selectedCard ? (
				<PaymentCard
					cardName={selectedCard.cardName}
					cardNumber={selectedCard.creditCardNumber}
					expirationData={selectedCard.expirationDate}
				/>
			) : (
				<p>No card selected.</p>
			)}
			<S.MyCardButton
				text="Choose Your Card"
				onClick={choseCardModalState.open}
			/>
			{choseCardModalState.isOpen && (
				<SelectCardModal
					onOpen={choseCardModalState.toggle}
					onCancel={choseCardModalState.close}
					title="Choose Your Card"
				/>
			)}
		</S.MyCardContainer>
	);
}

export default MyCard;
