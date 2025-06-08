import { AddTransactionForm, TransactionList } from "../../components";
import * as S from "./Transctions.styled";
import { useDialogState } from "../../components/hooks/useDialogState";

function Transactions() {
	const addTransactionModalState = useDialogState();

	return (
		<S.Transactions>
			<TransactionList onShowModal={addTransactionModalState.open} />
			{addTransactionModalState.isOpen && (
				<AddTransactionForm
					onClose={addTransactionModalState.close}
					isOpen={addTransactionModalState.isOpen}
				/>
			)}
		</S.Transactions>
	);
}

export default Transactions;
