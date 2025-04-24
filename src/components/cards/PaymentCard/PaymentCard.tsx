import * as S from "./PaymentCard.styled";
import visaLogo from "/visa-svgrepo-com.svg";

type PaymentCardProp = {
	cardNumber: string;
	expData: string;
};

function PaymentCard({ cardNumber, expData }: PaymentCardProp) {
	return (
		<S.PaymentCardBox>
			<S.FakeLogoBox>
				<S.LogoCircle />
				<S.SecondLogoCircle />
			</S.FakeLogoBox>
			<S.CardInfo>
				<S.PaymentNumber>{cardNumber}</S.PaymentNumber>
				<S.ExpirationDate>{expData}</S.ExpirationDate>
			</S.CardInfo>
			<S.VisaLogo src={visaLogo} />
		</S.PaymentCardBox>
	);
}

export default PaymentCard;
