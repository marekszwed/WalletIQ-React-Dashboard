import * as S from "./SinglePayment.styled";
import { useCallback } from "react";

type SinglePaymentType = {
	id: string;
	title: string;
	description?: string;
	date: string;
	amount: string;
	transactionType: "income" | "outcome";
	onDelete: (id: string) => void;
};

function SinglePayment({
	id,
	title,
	description,
	date,
	amount,
	transactionType,
	onDelete,
}: SinglePaymentType) {
	const handleDelete = useCallback(
		(e: React.MouseEvent) => {
			e.stopPropagation();
			onDelete(id);
		},
		[onDelete, id]
	);
	return (
		<S.Li>
			<S.PaymentInfoBox>
				<S.Title>{title}</S.Title>
				<S.Details>
					<S.Date>{date}</S.Date>
					{description && <S.Description>{description}</S.Description>}
				</S.Details>
			</S.PaymentInfoBox>
			<S.PaymentDataBox>
				<S.Amount $isIncome={transactionType === "income"}>{amount} $</S.Amount>
				<S.Icon onClick={handleDelete} />
			</S.PaymentDataBox>
		</S.Li>
	);
}

export default SinglePayment;
