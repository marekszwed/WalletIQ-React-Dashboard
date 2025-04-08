import * as S from "./RegisterForm.styled";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../formSlice";
import { registerSchema } from "./registerSchema";
import { useNavigate } from "react-router-dom";
import LabelFormLayout from "../../Layout/LabelFormLayout";
import InputFormLayout from "../../Layout/InputFormLayout";
import FormLayout from "../../Layout/FormLayout";

interface RegisterFormTypes {
	firstName: string;
	surname: string;
	email: string;
	password: string;
	confirmPassword: string;
}

function RegisterForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

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

			if (result.type === "auth/registerUser") {
				console.log("Data submitted correctly", data);
				navigate("/dashboard");
			} else {
				console.log("Data transmitted incorrectly", data);
			}
		} catch (error) {
			console.error("An error occurred while logging in:", error);
		}
	}

	return (
		<FormLayout onSubmit={handleSubmit(onSubmit)}>
			<S.PeronalInfoContainer>
				<S.RowContainer>
					<LabelFormLayout htmlFor="name">First name</LabelFormLayout>
					<InputFormLayout
						{...register("firstName")}
						id="name"
						placeholder="Name"
					/>
					<S.InputError text={errors.firstName?.message || ""} />
				</S.RowContainer>
				<S.RowContainer>
					<LabelFormLayout htmlFor="surname">Last name</LabelFormLayout>
					<InputFormLayout
						{...register("surname")}
						id="surname"
						placeholder="Last name"
					/>
					<S.InputError text={errors.surname?.message || ""} />
				</S.RowContainer>
			</S.PeronalInfoContainer>
			<S.InputContainer>
				<LabelFormLayout htmlFor="email">Email</LabelFormLayout>
				<InputFormLayout
					{...register("email")}
					id="email"
					placeholder="name@example.com"
				/>
				<S.InputError text={errors.email?.message || ""} />
			</S.InputContainer>
			<S.InputContainer>
				<LabelFormLayout htmlFor="password">Password</LabelFormLayout>
				<InputFormLayout
					{...register("password")}
					id="password"
					placeholder="••••••••"
				/>
				<S.InputError text={errors.password?.message || ""} />
			</S.InputContainer>
			<S.InputContainer>
				<LabelFormLayout htmlFor="confirm-password">
					Confirm password
				</LabelFormLayout>
				<InputFormLayout
					{...register("confirmPassword")}
					id="confirm-password"
					placeholder="••••••••"
				/>
				<S.InputError text={errors.confirmPassword?.message || ""} />
			</S.InputContainer>
			<S.SubmitButton type="submit" text="Create account" />
		</FormLayout>
	);
}

export default RegisterForm;
