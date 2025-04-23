import { useSelector } from "react-redux";
import PaymentCard from "../PaymentCard";
import * as S from "./MyCard.styled";
import { RootState } from "../../../Store/store";

function MyCard() {
	const selectedCard = useSelector(
		(state: RootState) => state.card.selectedCard
	);

	return (
		<S.MyCardContainer>
			<S.Title>My Card</S.Title>
			{selectedCard ? (
				<PaymentCard
					cardNumber={selectedCard.creditCardNumber}
					expData={selectedCard.expirationDate}
				/>
			) : (
				<p>No card selected.</p>
			)}
		</S.MyCardContainer>
	);
}

export default MyCard;
