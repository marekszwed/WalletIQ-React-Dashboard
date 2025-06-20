import { useDispatch, useSelector } from "react-redux";
import * as S from "./CardsForSelectModal.styled";
import { RootState } from "../../../Store/store";
import PaymentCard from "../PaymentCard";
import { AddCardFormTypes, setSelectedCard } from "../../forms/cardFormSlice";
import Toast from "../../Toast";

function CardsForSelectModal() {
	const dispatch = useDispatch();
	const cards = useSelector((state: RootState) => state.card.cards);

	const handleSelectCard = (card: AddCardFormTypes) => () => {
		if (card) {
			dispatch(setSelectedCard(card));
			Toast.success(`You chose ${card.cardName}`);
			return;
		}
		Toast.error("Something went wrong. Please try again.");
	};

	return (
		<S.CardModalLayout>
			{cards.map((card) => (
				<PaymentCard
					onClick={handleSelectCard(card)}
					key={card.id}
					cardName={card.cardName}
					cardNumber={card.creditCardNumber}
					expirationData={card.expirationDate}
				/>
			))}
		</S.CardModalLayout>
	);
}

export default CardsForSelectModal;
