import * as S from "./CardHeading.styled";

interface CardHeadingProps {
	setVisibility: (isLogin: boolean) => void;
}

function CardHeading({ setVisibility }: CardHeadingProps) {
	return (
		<>
			<S.CardHeader>
				<S.CardTitle>Witaj</S.CardTitle>
				<S.CardDescription>
					Zaloguj się na swoje konto lub utwórz nowe
				</S.CardDescription>
			</S.CardHeader>
			<S.CardButtonContainer>
				<S.CardButton text="Login" onClick={() => setVisibility(true)} />
				<S.CardButton
					text="Zarejestruj się"
					onClick={() => setVisibility(false)}
				/>
			</S.CardButtonContainer>
		</>
	);
}

export default CardHeading;
