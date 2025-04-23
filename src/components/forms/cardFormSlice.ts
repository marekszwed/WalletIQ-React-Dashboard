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
	selectedCard: AddCardFormTypes | null;
}

const initialState: CardState = {
	cards: JSON.parse(localStorage.getItem("cards") || "[]"),
	selectedCard: JSON.parse(localStorage.getItem("selectedCard") || "null"),
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
			if (state.selectedCard?.id === action.payload.id) {
				state.selectedCard = null;
				localStorage.removeItem("selectedCard");
			}
			state.cards = state.cards.filter((card) => card.id !== action.payload.id);
			localStorage.setItem("cards", JSON.stringify(state.cards));
		},
		clearData: (state) => {
			state.cards = [];
			state.selectedCard = null;
			localStorage.removeItem("cards");
			localStorage.removeItem("selectedCard");
		},
		setSelectedCard: (state, action: PayloadAction<AddCardFormTypes>) => {
			state.selectedCard = action.payload;
			localStorage.setItem("selectedCard", JSON.stringify(state.selectedCard));
		},
	},
});

export const { cardData, deleteSingleItem, clearData, setSelectedCard } =
	cardFormSlice.actions;
export default cardFormSlice.reducer;
