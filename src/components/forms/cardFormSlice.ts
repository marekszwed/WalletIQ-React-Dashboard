import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddCardFormTypes {
	creditCardNumber: string;
	cvcNumber: string;
	expirationDate: string;
}

const initialState: AddCardFormTypes = {
	creditCardNumber: "",
	cvcNumber: "",
	expirationDate: "",
};

const cardFormSlice = createSlice({
	name: "card",
	initialState,
	reducers: {
		cardData: (state, action: PayloadAction<AddCardFormTypes>) => {
			state.creditCardNumber = action.payload.creditCardNumber;
			state.cvcNumber = action.payload.cvcNumber;
			state.expirationDate = action.payload.expirationDate;
		},
	},
});

export const { cardData } = cardFormSlice.actions;
export default cardFormSlice.reducer;
