import styled from "styled-components";

export const PaymentCardBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(45deg, #3f72af 0%, #e28eea 100%);
	margin-top: ${({ theme }) => theme.margin.m1};
	width: 90%;
	height: 17rem;
	border-radius: ${({ theme }) => theme.border.b1};
	overflow: hidden;
`;

export const FakeLogoBox = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	margin-top: ${({ theme }) => theme.margin.m3};
`;

export const LogoCircle = styled.div`
	display: flex;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: ${({ theme }) => theme.border.b5};
	margin-left: ${({ theme }) => theme.margin.m2};
	background-color: ${({ theme }) => theme.primaryColors.white};
`;
export const SecondLogoCircle = styled.div`
	display: flex;
	width: 1.5rem;
	height: 1.5rem;
	border-radius: ${({ theme }) => theme.border.b5};
	margin-right: ${({ theme }) => theme.margin.m1};
	background-color: ${({ theme }) => theme.primaryColors.white200};
`;

export const CardInfo = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 1rem;
	margin-left: ${({ theme }) => theme.margin.m2};
`;

export const PaymentNumber = styled.p`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.f2};
	color: ${({ theme }) => theme.primaryColors.white};
	margin: ${({ theme }) => `${theme.margin.m3} 0 0 0`};
`;

export const ExpirationDate = styled.p`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	color: ${({ theme }) => theme.primaryColors.white};
`;

export const VisaLogo = styled.img`
	position: absolute;
	top: 6rem;
	right: 2rem;
	background-size: cover;
	height: 100%;
	width: 6rem;
	margin: 0;
`;
