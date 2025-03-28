import * as S from "./LoginForm.styled";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../formSlice";
import { loginSchema } from "./loginSchema";
import { isFulfilled, isRejected } from "@reduxjs/toolkit";

interface LoginFormTypes {
	email: string;
	password: string;
}

function LoginForm() {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormTypes>({
		resolver: yupResolver(loginSchema),
	});

	async function onSubmit(data: LoginFormTypes) {
		try {
			const result = await dispatch(loginUser(data));
			console.log(result);

			if (isFulfilled(result)) {
				console.log("Data submitted correctly", data);
			} else if (isRejected(result)) {
				console.log("Data transmitted incorrectly", data);
			}
		} catch (error) {
			console.error("An error occurred while logging in:", error);
		}
	}

	return (
		<S.Form onSubmit={handleSubmit(onSubmit)}>
			<S.InputContainer>
				<S.Label htmlFor="email">Email</S.Label>
				<S.Input
					{...register("email")}
					id="email"
					placeholder="name@example.com"
				/>
				<S.InputError text={errors.email?.message || ""} />
			</S.InputContainer>
			<S.InputContainer>
				<S.Label htmlFor="password">Password</S.Label>
				<S.Input
					{...register("password")}
					id="password"
					placeholder="••••••••"
				/>
				<S.InputError text={errors.password?.message || ""} />
			</S.InputContainer>
			<S.SubmitButton type="submit" text="Sign in" />
		</S.Form>
	);
}
export default LoginForm;
