import * as S from "./TransactionList.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import SinglePayment from "../SinglePayment";
import { deleteSingleTransaction } from "../../slices/TransactionFormSlice";
import { changeBalanceWithTransaction } from "../../slices/BudgetSlice";
import { useMemo } from "react";

type TransactionListTypes = {
	onShowModal: () => void;
};

function TransactionList({ onShowModal }: TransactionListTypes) {
	const transactions = useSelector(
		(state: RootState) => state.transaction.transactions
	);

	const selectedCard = useSelector(
		(state: RootState) => state.card.selectedCard
	);
	const dispatch = useDispatch();

	const filteredTransactions = useMemo(() => {
		if (!selectedCard) return [];
		return transactions.filter((t) => t.cardId === selectedCard.id);
	}, [transactions, selectedCard]);

	const handleRemoveSingleTransaction = (id: string) => {
		const transactionToDelete = transactions.find((t) => t.id === id);
		if (!transactionToDelete || !selectedCard) return;

		dispatch(deleteSingleTransaction({ id }));
		dispatch(
			changeBalanceWithTransaction({
				cardId: selectedCard?.id,
				transaction: transactionToDelete,
			})
		);
	};
	return (
		<S.TransactionContainer>
			<S.SubMenu>
				<S.DescriptionBox>
					<S.Title>Add Transaction</S.Title>
					<S.Description>Your most recent financial activities</S.Description>
				</S.DescriptionBox>
				<S.AddTransactionButton onClick={onShowModal} text="Add Transaction" />
			</S.SubMenu>
			<S.Ul>
				{filteredTransactions.map((transaction) => (
					<SinglePayment
						key={transaction.id}
						id={transaction.id}
						title={transaction.title}
						transactionType={transaction.transactionType}
						amount={transaction.amount.toFixed()}
						description={transaction.description}
						date={transaction.date}
						onDelete={handleRemoveSingleTransaction}
					/>
				))}
			</S.Ul>
		</S.TransactionContainer>
	);
}

export default TransactionList;
