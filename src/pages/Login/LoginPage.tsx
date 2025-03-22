import { useState } from "react";
import { CardHeading, LoginForm, RegisterForm } from "../../components";
import * as S from "./LoginPage.styled";

function LoginPage() {
	const [isLoginvisible, setIsLoginVisible] = useState(true);

	const changeVisibility = (isLogin: boolean) => {
		setIsLoginVisible(isLogin);
	};

	return (
		<S.LoginPage>
			<S.Card>
				<S.CardContainer>
					<CardHeading setVisibility={changeVisibility} />
					{isLoginvisible ? <LoginForm /> : <RegisterForm />}
				</S.CardContainer>
			</S.Card>
		</S.LoginPage>
	);
}

export default LoginPage;
