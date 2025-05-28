import * as S from "./PaymentCard.styled";
import visaLogo from "/visa-svgrepo-com.svg";

type PaymentCardProp = {
	cardName?: string;
	cardNumber: string;
	expirationData: string;
	onClick?: () => void;
};

function PaymentCard({
	cardName,
	cardNumber,
	expirationData,
	onClick,
}: PaymentCardProp) {
	return (
		<S.PaymentCardBox onClick={onClick}>
			<S.LogoAndTitleBox>
				<S.FakeLogoBox>
					<S.LogoCircle />
					<S.SecondLogoCircle />
				</S.FakeLogoBox>
				<S.TitleBox>
					<S.Title>{cardName}</S.Title>
				</S.TitleBox>
			</S.LogoAndTitleBox>
			<S.CardInfo>
				<S.PaymentNumber>{cardNumber}</S.PaymentNumber>
				<S.ExpirationDate>{expirationData}</S.ExpirationDate>
			</S.CardInfo>
			<S.VisaLogo src={visaLogo} />
		</S.PaymentCardBox>
	);
}

export default PaymentCard;
