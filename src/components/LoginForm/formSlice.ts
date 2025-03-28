import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
	firstName?: string;
	surname?: string;
	email: string;
	password: string;
	isAuthenticated: boolean;
}

const initialState: UserState = {
	firstName: "",
	surname: "",
	email: "",
	password: "",
	isAuthenticated: false,
};

const formSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginUser: (
			state,
			action: PayloadAction<Pick<UserState, "email" | "password">>
		) => {
			state.email = action.payload.email;
			state.password = action.payload.password;
			state.isAuthenticated = true;
		},
		registerUser: (
			state,
			action: PayloadAction<Omit<UserState, "isAuthenticated">>
		) => {
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
			};
		},
	},
});

export const { loginUser, registerUser } = formSlice.actions;
export default formSlice.reducer;
