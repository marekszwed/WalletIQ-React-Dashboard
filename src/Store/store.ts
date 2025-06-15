import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/forms/formSlice";
import cardFormReducer from "../components/forms/cardFormSlice";
import transactionReducer from "../components/slices/TransactionFormSlice";
import budgetSlice from "../components/slices/BudgetSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		card: cardFormReducer,
		transaction: transactionReducer,
		budget: budgetSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
