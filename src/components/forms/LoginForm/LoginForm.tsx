import * as S from "./LoginForm.styled";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../formSlice";
import { loginSchema } from "./loginSchema";
import { useNavigate } from "react-router-dom";
import LabelFormLayout from "../../Layout/LabelFormLayout";
import InputFormLayout from "../../Layout/InputFormLayout";
import FormLayout from "../../Layout/FormLayout";

interface LoginFormTypes {
	email: string;
	password: string;
}

function LoginForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

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

			if (result.type === "auth/loginUser") {
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
			<S.SubmitButton type="submit" text="Sign in" />
		</FormLayout>
	);
}
export default LoginForm;
