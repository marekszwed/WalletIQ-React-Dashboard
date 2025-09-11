import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddTransactionType } from "./TransactionFormSlice";
import { LOCAL_STORAGE_KEYS } from "../../constants/constants";
import { setStorageElement } from "../../helpers/localStorage";

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

const initialState: BudgetState = JSON.parse(
	localStorage.getItem(LOCAL_STORAGE_KEYS.budget) || "{}"
);

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

			setStorageElement(LOCAL_STORAGE_KEYS.budget, state);
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

			setStorageElement(LOCAL_STORAGE_KEYS.budget, state);
		},

		changeBalanceWithTransaction: (
			state,
			action: PayloadAction<{ cardId: string; transaction: AddTransactionType }>
		) => {
			const { cardId, transaction } = action.payload;

			if (!state[cardId]) return;

			const absAmount = Math.abs(transaction.amount);

			if (transaction.transactionType === "income") {
				state[cardId].income -= absAmount;
				state[cardId].balance -= absAmount;
			} else if (transaction.transactionType === "outcome") {
				state[cardId].outcome -= absAmount;
				state[cardId].balance += absAmount;
			}

			setStorageElement(LOCAL_STORAGE_KEYS.budget, state);
		},
	},
});

export const {
	updateBalanceWithTransaction,
	updategCardBudget,
	changeBalanceWithTransaction,
} = budgetSlice.actions;
export default budgetSlice.reducer;
