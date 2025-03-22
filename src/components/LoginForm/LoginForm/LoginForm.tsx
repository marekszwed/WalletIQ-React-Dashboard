import * as S from "./LoginForm.styled";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../schema";
import { loginUser } from "../formSlice";
import { AuthForm } from "../../../helpers/types";

function LoginForm() {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthForm>({
		resolver: yupResolver(validationSchema(false)),
	});

	const onSubmit = (data: AuthForm) => {
		dispatch(loginUser(data));
		console.log("Dane przekazane do loginUser:", data);
	};

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
