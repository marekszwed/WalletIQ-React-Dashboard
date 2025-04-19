import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddCardFormTypes {
	id: string;
	cardName: string;
	creditCardNumber: string;
	cvcNumber: string;
	expirationDate: string;
}

interface CardState {
	cards: AddCardFormTypes[];
}

const initialState: CardState = {
	cards: JSON.parse(localStorage.getItem("cards") || "[]"),
};

const cardFormSlice = createSlice({
	name: "card",
	initialState,
	reducers: {
		cardData: (state, action: PayloadAction<AddCardFormTypes>) => {
			state.cards.push(action.payload);
			localStorage.setItem("cards", JSON.stringify(state.cards));
		},
		deleteSingleItem: (
			state,
			action: PayloadAction<Pick<AddCardFormTypes, "id">>
		) => {
			state.cards = state.cards.filter((card) => card.id !== action.payload.id);
			localStorage.setItem("cards", JSON.stringify(state.cards));
		},
		clearData: (state) => {
			state.cards = [];
			localStorage.removeItem("cards");
		},
	},
});

export const { cardData, deleteSingleItem, clearData } = cardFormSlice.actions;
export default cardFormSlice.reducer;
