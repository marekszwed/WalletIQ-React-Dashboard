import { Trash2 } from "lucide-react";
import styled from "styled-components";

type SinglePaymentStyledProps = {
	$isIncome: boolean;
};

export const Li = styled.li`
	display: flex;
	justify-content: space-between;
	max-height: 8rem;
	height: 100%;
	margin-bottom: ${({ theme }) => theme.margin.m2};
	padding-inline: ${({ theme }) => theme.padding.p3};
	border: ${({ theme }) => theme.border.b_1} solid
		${({ theme }) => theme.primaryColors.white300};
	border-radius: ${({ theme }) => theme.border.b1};
	box-shadow: 8px 8px 32px 1px rgba(219, 226, 239, 1);
	overflow: hidden;
`;

export const PaymentInfoBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin: ${({ theme }) => `${theme.margin.m_5} 0`};
	gap: 0.3rem;
`;

export const PaymentDataBox = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Details = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const Title = styled.p`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.f2};
	margin: 0;
`;

export const Description = styled.p`
	position: relative;
	display: flex;
	margin: 0;
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	color: ${({ theme }) => theme.primaryColors.black400};
`;

export const Date = styled(Description)`
	margin-right: ${({ theme }) => theme.margin.m1};
`;

export const Icon = styled(Trash2)`
	display: flex;
	padding: ${({ theme }) => theme.padding.p_5};
	margin-left: ${({ theme }) => theme.margin.m2_5};
	color: ${({ theme }) => theme.primaryColors.error};
	cursor: pointer;
`;

export const Amount = styled.p<SinglePaymentStyledProps>`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.f_h2};
	color: ${({ $isIncome, theme }) =>
		$isIncome ? theme.primaryColors.green500 : theme.primaryColors.error};
`;
