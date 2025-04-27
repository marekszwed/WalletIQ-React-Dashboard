import { Trash2 } from "lucide-react";
import * as S from "./SingleCard.styled";
import { useCallback } from "react";

type SingleCardProps = {
	id: string;
	cardTitle: string;
	cardNumber: string;
	expirationDate: string;
	onDelete: (id: string) => void;
	onClick: () => void;
};

function SingleCard({
	id,
	cardTitle,
	cardNumber,
	expirationDate,
	onDelete,
	onClick,
}: SingleCardProps) {
	const handleDelete = useCallback(
		(e: React.MouseEvent) => {
			e.stopPropagation();
			onDelete(id);
		},
		[onDelete, id]
	);

	return (
		<S.Li onClick={onClick}>
			{cardTitle}
			<S.CardInfoContainer>
				<S.CardDataBox>
					<S.CardData>{cardNumber}</S.CardData>
					<S.CardData>Expiration date: {expirationDate}</S.CardData>
				</S.CardDataBox>
				<S.Options>
					<Trash2 onClick={handleDelete} />
				</S.Options>
			</S.CardInfoContainer>
		</S.Li>
	);
}

export default SingleCard;
