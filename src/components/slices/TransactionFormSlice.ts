import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionTypes } from "../../helpers/types";

export interface AddTransactionType {
	id: string;
	title: string;
	amount: number;
	transactionType: TransactionTypes;
	category: string;
	date: string;
	description?: string;
}

interface TransactionState {
	transactions: AddTransactionType[];
	singleTransaction: AddTransactionType | null;
}

const initialState: TransactionState = {
	transactions: JSON.parse(localStorage.getItem("transactions") || "[]"),
	singleTransaction: JSON.parse(
		localStorage.getItem("singleTransaction") || "null"
	),
};

const transactionSlice = createSlice({
	name: "transaction",
	initialState,
	reducers: {
		transactionData: (state, action: PayloadAction<AddTransactionType>) => {
			const amount =
				action.payload.transactionType === "income"
					? Math.abs(action.payload.amount)
					: -Math.abs(action.payload.amount);

			const finalTransaction = {
				...action.payload,
				amount,
			};

			state.transactions.push(finalTransaction);
			localStorage.setItem("transactions", JSON.stringify(state.transactions));
		},
		deleteSingleTransaction: (
			state,
			action: PayloadAction<Pick<AddTransactionType, "id">>
		) => {
			if (state.singleTransaction?.id === action.payload.id) {
				state.singleTransaction = null;
				localStorage.removeItem("singleTransaction");
			}
			state.transactions = state.transactions.filter(
				(transaction) => transaction.id !== action.payload.id
			);
			localStorage.setItem("transactions", JSON.stringify(state.transactions));
		},
	},
});
export const { transactionData, deleteSingleTransaction } =
	transactionSlice.actions;
export default transactionSlice.reducer;
