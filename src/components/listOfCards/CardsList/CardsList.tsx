import * as S from "./CardsList.styled";
import SingleCard from "../SingleCard";
import { RootState } from "../../../Store/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteSingleItem, setSelectedCard } from "../../forms/cardFormSlice";

type CardListProps = {
	onAddCardClick: () => void;
	onShowModal: () => void;
};

function CardsList({ onAddCardClick, onShowModal }: CardListProps) {
	const cards = useSelector((state: RootState) => state.card.cards);
	const dispatch = useDispatch();

	const handleRemoveSingleItem = (id: string) => {
		dispatch(deleteSingleItem({ id }));
	};

	const handleSelectCard = (id: string) => {
		const selected = cards.find((card) => card.id === id);
		if (selected) {
			dispatch(setSelectedCard(selected));
		}
	};

	return (
		<S.CardsListContainer>
			<S.SubMenu>
				<S.SubpageTitle>Manage Your cards</S.SubpageTitle>
				<S.ManageButtonsBox>
					<S.AddCardButton text="Add card" onClick={onAddCardClick} />
					<S.SubMenuButton text="Remove all" onClick={onShowModal} />
				</S.ManageButtonsBox>
			</S.SubMenu>
			<S.Ul>
				{cards.map((card) => (
					<SingleCard
						onClick={() => handleSelectCard(card.id)}
						id={card.id}
						key={card.id}
						cardTitle={card.cardName}
						cardNumber={card.creditCardNumber}
						expirationDate={card.expirationDate}
						onDelete={handleRemoveSingleItem}
					/>
				))}
			</S.Ul>
		</S.CardsListContainer>
	);
}

export default CardsList;
