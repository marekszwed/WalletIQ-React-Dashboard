import HeaderButton from "../../common/HeaderButton";
import * as S from "./CardsList.styled";
import SingleCard from "../SingleCard";
import { RootState } from "../../../Store/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteSingleItem } from "../../forms/cardFormSlice";

type CardListProps = {
	onAddCardClick: () => void;
	onShowWarning: () => void;
};

function CardsList({ onAddCardClick, onShowWarning }: CardListProps) {
	const cards = useSelector((state: RootState) => state.card);
	const dispatch = useDispatch();

	const handleRemoveSingleItem = (id: string) => {
		dispatch(deleteSingleItem({ id }));
	};

	return (
		<S.CardsListContainer>
			<S.SubMenu>
				<S.SubpageTitle>Manage Your cards</S.SubpageTitle>
				<S.ManageButtonsBox>
					<HeaderButton text="Add card" onClick={onAddCardClick} />
					<S.SubMenuButton text="Remove all" onClick={onShowWarning} />
				</S.ManageButtonsBox>
			</S.SubMenu>
			<S.Ul>
				{cards.map((card) => (
					<SingleCard
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
