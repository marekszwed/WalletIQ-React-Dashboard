import * as S from "./RegisterForm.styled";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../schema";
import { registerUser } from "../formSlice";
import { AuthForm } from "../../../helpers/types";

function RegisterForm() {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthForm>({
		resolver: yupResolver(validationSchema(true)),
	});

	const onSubmit = (data: AuthForm) => {
		dispatch(registerUser(data));
		console.log(data);
	};

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
