import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setStorageElement } from "../../helpers/localStorage";
import { LOCAL_STORAGE_KEYS } from "../../constants/constants";

interface AddCardFormTypes {
	id: string;
	cardName: string;
	creditCardNumber: string;
	cvcNumber: string;
	expirationDate: string;
	availableBalance: string;
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
			setStorageElement(LOCAL_STORAGE_KEYS.cards, state.cards);
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
			setStorageElement(LOCAL_STORAGE_KEYS.cards, state.cards);
		},
		clearData: (state) => {
			state.cards = [];
			state.selectedCard = null;
			localStorage.removeItem("cards");
			localStorage.removeItem("selectedCard");
		},
		setSelectedCard: (state, action: PayloadAction<AddCardFormTypes>) => {
			state.selectedCard = action.payload;
			setStorageElement(LOCAL_STORAGE_KEYS.selectedCard, state.selectedCard);
		},
	},
});

export type { AddCardFormTypes };
export const { cardData, deleteSingleItem, clearData, setSelectedCard } =
	cardFormSlice.actions;
export default cardFormSlice.reducer;
