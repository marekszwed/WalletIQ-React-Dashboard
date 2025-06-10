import * as S from "./TransactionList.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import SinglePayment from "../SinglePayment";
import { deleteSingleTransaction } from "../../slices/TransactionFormSlice";

type TransactionListTypes = {
	onShowModal: () => void;
};

function TransactionList({ onShowModal }: TransactionListTypes) {
	const transactions = useSelector(
		(state: RootState) => state.transaction.transactions
	);
	const dispatch = useDispatch();

	const handleRemoveSingleTransaction = (id: string) => {
		dispatch(deleteSingleTransaction({ id }));
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
				{transactions.map((transaction) => (
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
