import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddTransactionType } from "./TransactionFormSlice";

interface BudgetData {
	balance: number;
	income: number;
	outcome: number;
}

interface BudgetState {
	[cardId: string]: BudgetData;
}

interface UpdateBudgetPayload {
	cardId: string;
	transaction: AddTransactionType;
}

const initialState: BudgetState = {};

const budgetSlice = createSlice({
	name: "budget",
	initialState,
	reducers: {
		updateBalanceWithTransaction: (
			state,
			action: PayloadAction<UpdateBudgetPayload>
		) => {
			const { cardId, transaction } = action.payload;

			if (!state[cardId]) {
				state[cardId] = {
					balance: 0,
					income: 0,
					outcome: 0,
				};
			}

			if (transaction.transactionType === "income") {
				state[cardId].income += transaction.amount;
				state[cardId].balance += transaction.amount;
			} else if (transaction.transactionType === "outcome") {
				state[cardId].outcome += transaction.amount;
				state[cardId].balance -= transaction.amount;
			}
		},
		updategCardBudget: (
			state,
			action: PayloadAction<{ cardId: string; availableBalance: number }>
		) => {
			if (!state[action.payload.cardId]) {
				state[action.payload.cardId] = {
					income: 0,
					outcome: 0,
					balance: action.payload.availableBalance,
				};
			}
		},
	},
});

export const { updateBalanceWithTransaction, updategCardBudget } =
	budgetSlice.actions;
export default budgetSlice.reducer;
