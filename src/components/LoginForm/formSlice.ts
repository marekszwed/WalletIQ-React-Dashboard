import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
	firstName?: string;
	surname?: string;
	email: string;
	password: string;
	isAuthentificated: boolean;
}

const initialState: UserState = {
	firstName: "",
	surname: "",
	email: "",
	password: "",
	isAuthentificated: false,
};

const formSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginUser: (
			state,
			action: PayloadAction<Pick<UserState, "email" | "password">>
		) => {
			console.log("Akcja loginUser wykonana z payloadem:", action.payload);
			state.email = action.payload.email;
			state.password = action.payload.password;
			state.isAuthentificated = true;
		},
		registerUser: (
			state,
			action: PayloadAction<Omit<UserState, "isAuthentificated">>
		) => {
			return {
				...state,
				...action.payload,
				isAuthentificated: true,
			};
		},
	},
});

export const { loginUser, registerUser } = formSlice.actions;
export default formSlice.reducer;
