import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/forms/formSlice";
import cardFormReducer from "../components/forms/cardFormSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		card: cardFormReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
