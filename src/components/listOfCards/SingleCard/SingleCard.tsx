import { Trash2 } from "lucide-react";
import * as S from "./SingleCard.styled";

type SingleCardProps = {
	id: string;
	cardTitle: string;
	cardNumber: string;
	expirationDate: string;
	onDelete: (id: string) => void;
};

function SingleCard({
	id,
	cardTitle,
	cardNumber,
	expirationDate,
	onDelete,
}: SingleCardProps) {
	return (
		<>
			<S.Li>
				{cardTitle}
				<S.CardInfoContainer>
					<S.CardDataBox>
						<S.CardData>{cardNumber}</S.CardData>
						<S.CardData>Expiration date: {expirationDate}</S.CardData>
					</S.CardDataBox>
					<S.Options>
						<Trash2 onClick={() => onDelete(id)} />
					</S.Options>
				</S.CardInfoContainer>
			</S.Li>
		</>
	);
}

export default SingleCard;
