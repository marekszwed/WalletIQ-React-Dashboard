import * as S from "./RegisterForm.styled";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../formSlice";
import { registerSchema } from "./registerSchema";
import { isFulfilled, isRejected } from "@reduxjs/toolkit";

interface RegisterFormTypes {
	firstName: string;
	surname: string;
	email: string;
	password: string;
	confirmPassword: string;
}

function RegisterForm() {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormTypes>({
		resolver: yupResolver(registerSchema),
	});

	async function onSubmit(data: RegisterFormTypes) {
		try {
			const result = await dispatch(registerUser(data));
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
			<S.PeronalInfoContainer>
				<S.RowContainer>
					<S.Label htmlFor="name">First name</S.Label>
					<S.Input {...register("firstName")} id="name" placeholder="Name" />
					<S.InputError text={errors.firstName?.message || ""} />
				</S.RowContainer>
				<S.RowContainer>
					<S.Label htmlFor="surname">Last name</S.Label>
					<S.Input
						{...register("surname")}
						id="surname"
						placeholder="Last name"
					/>
					<S.InputError text={errors.surname?.message || ""} />
				</S.RowContainer>
			</S.PeronalInfoContainer>
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
			<S.InputContainer>
				<S.Label htmlFor="confirm-password">Confirm password</S.Label>
				<S.Input
					{...register("confirmPassword")}
					id="confirm-password"
					placeholder="••••••••"
				/>
				<S.InputError text={errors.confirmPassword?.message || ""} />
			</S.InputContainer>
			<S.SubmitButton type="submit" text="Create account" />
		</S.Form>
	);
}

export default RegisterForm;
