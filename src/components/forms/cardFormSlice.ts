import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddCardFormTypes {
	id: string;
	cardName: string;
	creditCardNumber: string;
	cvcNumber: string;
	expirationDate: string;
}

const initialState: AddCardFormTypes[] = JSON.parse(
	localStorage.getItem("cards") || "[]"
);

const cardFormSlice = createSlice({
	name: "card",
	initialState,
	reducers: {
		cardData: (state, action: PayloadAction<AddCardFormTypes>) => {
			const newCard = action.payload;
			state.push(newCard);
			localStorage.setItem("cards", JSON.stringify(state));
		},
		deleteSingleItem: (
			state,
			action: PayloadAction<Pick<AddCardFormTypes, "id">>
		) => {
			const updatedState = state.filter(
				(card) => card.id !== action.payload.id
			);
			localStorage.setItem("cards", JSON.stringify(updatedState));
			return updatedState;
		},
		clearData: () => {
			return [];
		},
	},
});

export const { cardData, deleteSingleItem, clearData } = cardFormSlice.actions;
export default cardFormSlice.reducer;
